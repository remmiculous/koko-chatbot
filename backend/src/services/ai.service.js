import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
dotenv.config();

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

const SYSTEM_PROMPT = `
You are a veterinary assistant chatbot.

Rules you MUST follow:
- You can ONLY answer generic veterinary-related questions.
- Allowed topics include pet care, vaccination schedules, diet, nutrition,
  common illnesses, preventive care, and general animal health advice.
- DO NOT answer questions unrelated to veterinary care.
- DO NOT provide emergency, diagnostic, or prescription advice.
- If a question is outside veterinary topics, politely say you cannot help with that.
- Keep responses clear, friendly, and concise.
`;

export const generateAIResponse = async (messages) => {
  try {
    const formattedMessages = [
      {
        role: "user",
        parts: [{ text: SYSTEM_PROMPT }]
      },
      ...messages.map((msg) => ({
        role: msg.role === "bot" ? "model" : "user",
        parts: [{ text: msg.content }]
      }))
    ];

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: formattedMessages
    });

    const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

    return text || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "Sorry, I'm having trouble answering right now.";
  }
};