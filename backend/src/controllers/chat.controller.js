import { processChatMessage } from "../services/chat.service.js";

export const handleChatMessage = async (req, res) => {
  try {
    const { sessionId, message, context } = req.body;

    if (!sessionId || !message) {
      return res.status(400).json({
        error: "sessionId and message are required"
      });
    }

    const reply = await processChatMessage({
      sessionId,
      message,
      context
    });

    res.status(200).json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    res.status(500).json({
      reply: "Sorry, something went wrong. Please try again."
    });
  }
};
