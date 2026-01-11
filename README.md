# 🐾 Veterinary Chatbot SDK (MERN Stack)

A plug-and-play, website-embeddable chatbot SDK that answers generic veterinary-related questions and supports conversational veterinary appointment booking.

This project was built as part of the **Veterinary Chatbot SDK (MERN Stack)** assignment.

---

## 📌 Overview

The goal of this project is to demonstrate real-world software engineering skills by building:

- A **script-based chatbot SDK** embeddable into any website
- An **AI-powered veterinary Q&A system**
- A **conversational appointment booking flow**
- A clean, maintainable **MERN-stack backend**

---

## ✨ Features

### Chatbot SDK

- Single `<script>` tag integration
- Floating, expandable chat widget
- Works with or without configuration
- SDK-safe (no global CSS conflicts)

### AI-Powered Veterinary Q&A

- Uses **Google Gemini API**
- Restricted to **generic veterinary topics only**
- Politely declines non-veterinary questions
- No diagnostic or emergency medical advice

### Appointment Booking

- Conversational, step-by-step flow
- Input validation
- Confirmation before saving
- Stored in MongoDB and linked to session

### UX & Reliability

- Loading indicator
- Typing animation
- Auto-scroll
- Graceful error handling (backend/network failures)

---

## 🧠 Architecture Overview

```

Client Website
└── <script src="chatbot.js">
└── React SDK (UI + State)
└── Backend API (Node.js + Express)
├── Google Gemini API
└── MongoDB (Conversations & Appointments)

```

---

## 🛠 Tech Stack

### Frontend SDK

- React
- Vite (library/IIFE build)
- Inline CSS (SDK-safe)

### Backend

- Node.js
- Express
- MongoDB (Mongoose)
- Google Gemini API

### Hosting

- Frontend SDK & Demo: Vercel
- Backend API: Render
- Database: MongoDB Atlas

---

## 🚀 Getting Started (Local Setup)

### Backend

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file using `.env.example`.

---

### Frontend SDK

```bash
cd frontend
npm install
npm run build
```

This generates:

```
dist/chatbot.js
```

---

## 🔌 Embedding the Chatbot

### Basic Integration

```html
<script src="https://your-domain.com/chatbot.js"></script>
```

### Context-Based Integration (Optional)

```html
<script>
  window.VetChatbotConfig = {
    userId: "user_123",
    userName: "John Doe",
    petName: "Buddy",
    source: "marketing-site",
  };
</script>

<script src="https://your-domain.com/chatbot.js"></script>
```

Context is optional. The chatbot works correctly even without it.

---

## 🗂 Data Models

### Conversation

- sessionId
- messages (user & bot)
- timestamps
- optional context

### Appointment

- ownerName
- petName
- phoneNumber
- preferredDateTime
- linked sessionId
- createdAt

---

## 🤖 AI Safety & Prompting

- A strict system prompt enforces veterinary-only responses
- Non-veterinary questions are politely declined
- No diagnosis, prescriptions, or emergency advice is provided

---

## 🧪 Testing

- Backend APIs tested using Postman
- SDK tested via plain HTML embed
- Appointment flow tested end-to-end
- Network and backend failure scenarios handled gracefully

---

## 🔮 Future Improvements

- Admin dashboard for managing appointments
- Conversation history restore on reload
- Theming via SDK configuration
- Authentication support
- WebSocket-based real-time updates
- Basic automated tests

---

## 📎 Demo Links

- **SDK:** [https://koko-chatbot-it87.vercel.app/chatbot.js](https://koko-chatbot-it87.vercel.app/chatbot.js)
- **Demo Page:** [https://koko-chatbot-it87.vercel.app/](https://koko-chatbot-it87.vercel.app/)
- **Backend API:** [https://koko-chatbot-rnh7.onrender.com](https://koko-chatbot-rnh7.onrender.com)

---

Made with ☮️
