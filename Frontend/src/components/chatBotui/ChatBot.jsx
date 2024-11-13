import React, { useState, useRef, useEffect } from 'react';
import { BotIcon as Robot, Send, ThumbsUp, ThumbsDown, X } from 'lucide-react';

const API_URL = "http://localhost:5000/api";

const ChatBot = ({ initialMessages = [], collectionId = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [messageRatings, setMessageRatings] = useState({});
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleRateMessage = async (messageId, vote) => {
    try {
      const response = await fetch(`${API_URL}/chat/${messageId}/rate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vote }),
      });
      if (!response.ok) throw new Error("Failed to rate message");
      setMessageRatings((prev) => ({ ...prev, [messageId]: vote }));
    } catch (error) {
      console.error("Error rating message:", error);
      setError("Failed to rate message");
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { text: userMessage, sender: "user" }]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, collection: collectionId }),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { id: data.id, text: data.response, sender: "bot", usage: data.usage },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to send message. Please try again.");
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, I couldn't process your message. Please try again.", sender: "bot", error: true },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 sm:w-96 bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold text-lg">Chat Support</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-full p-1 transition-colors duration-200"
              aria-label="Close chat"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="h-96 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className="flex flex-col max-w-[80%]">
                  <div
                    className={`p-3 rounded-lg shadow-md ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === "bot" && msg.id && (
                    <div className="flex items-center mt-1 space-x-2">
                      <button
                        onClick={() => handleRateMessage(msg.id, "up")}
                        className={`p-1 rounded-full hover:bg-gray-200 transition-colors duration-200 ${
                          messageRatings[msg.id] === "up" ? "text-green-500" : "text-gray-400"
                        }`}
                        aria-label="Thumbs up"
                      >
                        <ThumbsUp size={16} />
                      </button>
                      <button
                        onClick={() => handleRateMessage(msg.id, "down")}
                        className={`p-1 rounded-full hover:bg-gray-200 transition-colors duration-200 ${
                          messageRatings[msg.id] === "down" ? "text-red-500" : "text-gray-400"
                        }`}
                        aria-label="Thumbs down"
                      >
                        <ThumbsDown size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-500 p-3 rounded-lg shadow-md">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                </div>
              </div>
            )}
            {error && <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">{error}</div>}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                placeholder="Type a message..."
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 animate-bounce"
          aria-label="Open chat"
        >
          <Robot className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;