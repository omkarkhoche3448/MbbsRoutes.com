from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import requests
import json


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:5173", "http://localhost:3000"]}})

# Environment variables
VULTR_API_KEY = os.getenv('VULTR_API_KEY')
VULTR_API_URL = "https://api.vultrinference.com/v1/chat/completions"

# Message history storage
message_history = []

@app.route('/api/chat', methods=['POST'])
def handle_chat():
    data = request.get_json()
    message = data.get('message')
    if not message:
        return jsonify({'error': 'Message is required'}), 400

    print("Received message:", message)

    # Format messages for the API
    formatted_messages = [
        {'role': 'system', 'content': 'You are a helpful assistant.'}
    ] + [
        {'role': 'user' if msg['sender'] == 'user' else 'assistant', 'content': msg['text']}
        for msg in message_history
    ] + [
        {'role': 'user', 'content': message}
    ]

    # print("Sending request to Vultr API with messages:", formatted_messages)

    # Call Vultr API
    vultr_response = call_vultr_api(formatted_messages)
    print("Vultr API Response:", vultr_response)

    # Extract bot response
    bot_response = vultr_response['choices'][0]['message']['content']
    if not bot_response:
        return jsonify({'error': 'Invalid response from Vultr API'}), 500

    # Store messages
    message_history.append({'text': message, 'sender': 'user'})
    message_history.append({'text': bot_response, 'sender': 'bot'})

    return jsonify({
        'response': bot_response,
        'usage': vultr_response['usage']
    })


def call_vultr_api(messages):
    try:
        headers = {
            "Authorization": f"Bearer {VULTR_API_KEY}",
            "Content-Type": "application/json"
        }
        request_data = {
            "model": "llama2-13b-chat-Q5_K_M",
            "messages": messages,
            "max_tokens": 512,
            "temperature": 0.8,
            "top_k": 40,
            "top_p": 0.9,
            "stream": False
        }
        
        # print(f"Sending request to Vultr API with data: {json.dumps(request_data, indent=2)}")
        response = requests.post(VULTR_API_URL, json=request_data, headers=headers)
        # print(f"Vultr API Response Status Code: {response.status_code}")
        # print(f"Vultr API Response Content: {response.content}")

        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        error_details = {
            "status": response.status_code,
            "statusText": response.reason,
            "data": response.json(),
            "message": str(e)
        }
        print("Vultr API Error Details:", error_details)
        raise e
    
@app.route('/api/chat/history', methods=['GET'])
def get_chat_history():
    return jsonify(message_history)

if __name__ == '__main__':
    app.run(debug=True, port=5000)