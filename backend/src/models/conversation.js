import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["user", "bot"],
      required: true
    },
    content: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  },
  { _id: false }
);

const conversationSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
      unique: true,
      index: true
    },

    messages: {
      type: [messageSchema],
      default: []
    },

    context: {
      type: Object,
      default: {}
    },

    conversationState: {
      intent: {
        type: String,
        enum: ["chat", "appointment"],
        default: "chat"
      },
      step: {
        type: String,
        default: null
      }
    }
  },
  {
    timestamps: true
  }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
