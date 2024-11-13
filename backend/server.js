require('dotenv').config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

// Environment variables
const VULTR_API_KEY = process.env.VULTR_API_KEY;
const VULTR_API_URL = "https://api.vultrinference.com/v1/chat/completions";

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// Message history storage
const messageHistory = [];

// Helper function to make Vultr API calls
async function callVultrAPI(messages) {
  try {
    const response = await axios.post(
      VULTR_API_URL,
      {
        model: "llama2-13b-chat-Q5_K_M",  
        messages: messages,
        max_tokens: 512,
        temperature: 0.8,
        top_k: 40,
        top_p: 0.9,
        stream: false,
      },
      {
        headers: {
          Authorization: `Bearer ${VULTR_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    // Enhanced error logging
    const errorDetails = {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message
    };
    console.error("Vultr API Error Details:", JSON.stringify(errorDetails, null, 2));
    throw error;
  }
}

// Chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    console.log("Received message:", message);

    // Format messages for the API
    const formattedMessages = [
      { role: "system", content: "You are a helpful assistant." },
      ...messageHistory.map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      })),
      { role: "user", content: message },
    ];

    console.log("Sending request to Vultr API with messages:", JSON.stringify(formattedMessages, null, 2));

    // Call Vultr API
    const vultrResponse = await callVultrAPI(formattedMessages);
    console.log("Vultr API Response:", JSON.stringify(vultrResponse, null, 2));

    // Extract bot response
    const botResponse = vultrResponse.choices?.[0]?.message?.content;
    if (!botResponse) {
      throw new Error("Invalid response from Vultr API");
    }

    // Store messages
    messageHistory.push(
      { text: message, sender: "user" },
      { text: botResponse, sender: "bot" }
    );

    // Send response
    res.json({
      response: botResponse,
      usage: vultrResponse.usage,
    });
  } catch (error) {
    const errorResponse = {
      error: "Failed to process message",
      details: error.message,
      vultrError: error.response?.data,
      status: error.response?.status,
      statusText: error.response?.statusText
    };
    
    console.error("Chat Error:", JSON.stringify(errorResponse, null, 2));
    
    res.status(error.response?.status || 500).json(errorResponse);
  }
});

// Get chat history endpoint
app.get("/api/chat/history", (req, res) => {
  res.json(messageHistory);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Using Vultr API with model: llama2-13b-chat-Q5_K_M`);
});