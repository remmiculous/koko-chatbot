import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

console.log('jelo')

dotenv.config();

const PORT = process.env.PORT || 5000;

const server = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

server();
