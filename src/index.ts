import express from "express";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Express app
const PORT = process.env.PORT || 3000;
const API_URL = process.env.API_URL || `http://localhost:${PORT}`;
const API_VERSION = process.env.API_VERSION || "v1";

const app = express();

// ROUTES
app.get(`/api/${API_VERSION}/hello`, (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on ${API_URL}`);
});
