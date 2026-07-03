const { GoogleGenAI } = require("@google/genai");
const Chat = require("../models/Chat");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// AI Chat
const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        message: "Message is required",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
    });

    const aiReply = response.text;

    const chat = await Chat.create({
      user: req.user.id,
      userMessage: message,
      aiReply,
    });

    res.json(chat);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "AI Error",
    });
  }
};

// Get Logged-in User Chats
const getChats = async (req, res) => {
  try {
    const chats = await Chat.find({
      user: req.user.id,
    }).sort({ createdAt: 1 });

    res.json(chats);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  chatWithAI,
  getChats,
};