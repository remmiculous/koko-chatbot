import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    service: "Chatbot API"
  });
});

export default app;
