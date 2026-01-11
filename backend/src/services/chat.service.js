import Conversation from "../models/conversation.js";
import { generateAIResponse } from "./ai.service.js";
import { handleAppointmentFlow } from "./appointment.service.js";

export const processChatMessage = async ({
  sessionId,
  message,
  context
}) => {
  // 1. Find or create conversation
  let conversation = await Conversation.findOne({ sessionId });

  if (!conversation) {
    conversation = await Conversation.create({
      sessionId,
      context: context || {}
    });
  }

  // 2. Save user message
  conversation.messages.push({
    role: "user",
    content: message
  });

  let botReply = "";

  // 3. Appointment intent detection (simple but effective)
  const wantsAppointment =
    /appointment|book|schedule|visit/i.test(message);

  if (
    wantsAppointment ||
    conversation.conversationState.intent === "appointment"
  ) {
    conversation.conversationState.intent = "appointment";

    botReply = await handleAppointmentFlow(conversation, message);
  } else {
    // 4. AI response
    botReply = await generateAIResponse(conversation.messages);
  }

  // 5. Save bot message
  conversation.messages.push({
    role: "bot",
    content: botReply
  });

  await conversation.save();

  return botReply;
};
