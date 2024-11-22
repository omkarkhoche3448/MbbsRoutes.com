from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import requests
import json
from pymongo import MongoClient
from flask_jwt_extended import JWTManager, create_access_token
import bcrypt
from config import Config



app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:5173", "http://localhost:3000","https://3.109.16.92:5000"]}})

# Environment variables
VULTR_API_KEY = os.getenv('VULTR_API_KEY')
VULTR_API_URL = "https://api.vultrinference.com/v1/chat/completions"

medical_colleges = [
    {
      "id": 1, "name": "Harvard Medical School", "location": "Boston, MA", "tuition": 63000, "acceptanceRate": 3.9, "studentPopulation": 715, "score": 148.05, "imageUrl": "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
    },
    {
      "id": 2, "name": "Stanford University School of Medicine", "location": "Stanford, CA", "tuition": 62000, "acceptanceRate": 2.3, "studentPopulation": 520, "score": 153.75, "imageUrl": "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      "id": 3, "name": "Johns Hopkins University School of Medicine", "location": "Baltimore, MD", "tuition": 60000, "acceptanceRate": 10.9, "studentPopulation": 482, "score": 150.58, "imageUrl": "https://images.unsplash.com/photo-1585684744394-b1de89a42fbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      "id": 4, "name": "University of Cambridge School of Clinical Medicine", "location": "Cambridge, UK", "tuition": 55000, "acceptanceRate": 7.5, "studentPopulation": 330, "score": 156.90, "imageUrl": "https://images.unsplash.com/photo-1506318137071-a8e063b2bb4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      "id": 5, "name": "University of Oxford Medical Sciences Division", "location": "Oxford, UK", "tuition": 58000, "acceptanceRate": 8.1, "studentPopulation": 350, "score": 157.25, "imageUrl": "https://images.unsplash.com/photo-1565076893121-65fcb2da52d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      "id": 6, "name": "Imperial College School of Medicine", "location": "London, UK", "tuition": 60000, "acceptanceRate": 9.4, "studentPopulation": 420, "score": 154.80, "imageUrl": "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      "id": 7, "name": "University of Toronto Faculty of Medicine", "location": "Toronto, Canada", "tuition": 70000, "acceptanceRate": 5.9, "studentPopulation": 1050, "score": 151.75, "imageUrl": "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      "id": 8, "name": "McGill University Faculty of Medicine", "location": "Montreal, Canada", "tuition": 65000, "acceptanceRate": 6.2, "studentPopulation": 900, "score": 149.90, "imageUrl": "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      "id": 9, "name": "University of Melbourne Faculty of Medicine, Dentistry and Health Sciences", "location": "Melbourne, Australia", "tuition": 75000, "acceptanceRate": 8.7, "studentPopulation": 1200, "score": 152.60, "imageUrl": "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      "id": 10, "name": "University of Sydney Faculty of Medicine and Health", "location": "Sydney, Australia", "tuition": 72000, "acceptanceRate": 7.5, "studentPopulation": 1100, "score": 153.25, "imageUrl": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      "id": 11, "name": "Karolinska Institute", "location": "Stockholm, Sweden", "tuition": 45000, "acceptanceRate": 9.2, "studentPopulation": 6000, "score": 154.70, "imageUrl": "https://images.unsplash.com/photo-1506318137071-a8e063b2bb4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      "id": 12, "name": "University of Copenhagen Faculty of Health and Medical Sciences", "location": "Copenhagen, Denmark", "tuition": 50000, "acceptanceRate": 7.8, "studentPopulation": 4500, "score": 151.85, "imageUrl": "https://images.unsplash.com/photo-1565076893121-65fcb2da52d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      "id": 13, "name": "Peking University Health Science Center", "location": "Beijing, China", "tuition": 30000, "acceptanceRate": 4.2, "studentPopulation": 3800, "score": 150.95, "imageUrl": "https://images.unsplash.com/photo-1535139262971-0e5339515d6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      "id": 14, "name": "University of Tokyo Faculty of Medicine", "location": "Tokyo, Japan", "tuition": 40000, "acceptanceRate": 5.6, "studentPopulation": 2900, "score": 152.80, "imageUrl": "https://images.unsplash.com/photo-1536257104079-d4d14fcf0811?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      "id": 15, "name": "National University of Singapore Yong Loo Lin School of Medicine", "location": "Singapore", "tuition": 65000, "acceptanceRate": 6.5, "studentPopulation": 600, "score": 154.10, "imageUrl": "https://images.unsplash.com/photo-1528984344877-80ce6c8db700?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      "id": 16, "name": "University of Hong Kong Li Ka Shing Faculty of Medicine", "location": "Hong Kong", "tuition": 70000, "acceptanceRate": 7.1, "studentPopulation": 720, "score": 153.60, "imageUrl": "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      "id": 17, "name": "Charité - Universitätsmedizin Berlin", "location": "Berlin, Germany", "tuition": 35000, "acceptanceRate": 8.9, "studentPopulation": 8000, "score": 151.40, "imageUrl": "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      "id": 18, "name": "Sapienza University of Rome Faculty of Medicine and Dentistry", "location": "Rome, Italy", "tuition": 25000, "acceptanceRate": 9.6, "studentPopulation": 6500, "score": 149.80, "imageUrl": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      "id": 19, "name": "Sorbonne University Faculty of Medicine", "location": "Paris, France", "tuition": 30000, "acceptanceRate": 7.9, "studentPopulation": 7200, "score": 150.65, "imageUrl": "https://images.unsplash.com/photo-1535139262971-0e5339515d6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      "id": 20, "name": "University of Cape Town Faculty of Health Sciences", "location": "Cape Town, South Africa", "tuition": 20000, "acceptanceRate": 8.2, "studentPopulation": 1400, "score": 148.95, "imageUrl": "https://images.unsplash.com/photo-1536257104079-d4d14fcf0811?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    }
]

# MongoDB Connection
client = MongoClient(Config.MONGODB_URI)
db = client['medical_college_db']
contact_collection = db['contacts']
consultation_collection = db['consultations']
users_collection = db['users']


jwt = JWTManager(app)
app.config['JWT_SECRET_KEY'] = 'your-secret-key' 
    
# Message history storage
message_history = []

@app.route('/api/chat', methods=['POST'])
def handle_chat():
    data = request.get_json()
    message = data.get('message')
    if not message:
        return jsonify({'error': 'Message is required'}), 400

    # print("Received message:", message)

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
    # print("Vultr API Response:", vultr_response)

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
        print(f"Vultr API Response Status Code: {response.status_code}")
        print(f"Vultr API Response Content: {response.content}")

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

@app.route('/api/recommendations', methods=['POST'])
def get_recommendations():
    data = request.get_json()
    gpa = float(data.get('gpa', 0))
    mcat = float(data.get('mcat', 0))
    
    # Calculate scores for each college
    scored_colleges = []
    for college in medical_colleges:
        score = 0
        # GPA score
        if gpa >= 3.6:
            score += 50
        # MCAT score
        if mcat >= 510:
            score += 50
        # Acceptance rate score
        score += (1 - college['acceptanceRate'] / 100) * 50
        
        college_with_score = college.copy()
        college_with_score['score'] = score
        scored_colleges.append(college_with_score)
    
    # Sort by score and get top 3
    top_colleges = sorted(scored_colleges, key=lambda x: x['score'], reverse=True)[:3]
    
    return jsonify(top_colleges)


@app.route('/api/contact', methods=['POST'])
def handle_contact():
    try:
        contact_data = request.json
        result = contact_collection.insert_one(contact_data)
        return jsonify({
            "success": True,
            "message": "Contact form submitted successfully",
            "id": str(result.inserted_id)
        }), 201
    except Exception as e:
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500

@app.route('/api/consultation', methods=['POST'])
def handle_consultation():
    try:
        consultation_data = request.json
        result = consultation_collection.insert_one(consultation_data)
        return jsonify({
            "success": True,
            "message": "Consultation request submitted successfully",
            "id": str(result.inserted_id)
        }), 201
    except Exception as e:
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500


@app.route('/api/signup', methods=['POST'])
def signup():
    try:
        data = request.json
        # Check if user already exists
        if users_collection.find_one({"email": data['email']}):
            return jsonify({"error": "Email already registered"}), 400
        
        # Hash password
        hashed_password = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt())
        
        # Create user document
        user = {
            "fullName": data['fullName'],
            "email": data['email'],
            "password": hashed_password
        }
        
        # Insert user
        users_collection.insert_one(user)
        
        return jsonify({"message": "User registered successfully"}), 201
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/login', methods=['POST'])
def login():
    try:
        data = request.json
        user = users_collection.find_one({"email": data['email']})
        
        if not user:
            return jsonify({"error": "User not found"}), 404
            
        if bcrypt.checkpw(data['password'].encode('utf-8'), user['password']):
            access_token = create_access_token(identity=str(user['_id']))
            return jsonify({
                "token": access_token,
                "user": {
                    "fullName": user['fullName'],
                    "email": user['email']
                }
            }), 200
        else:
            return jsonify({"error": "Invalid password"}), 401
            
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True, port=5000)