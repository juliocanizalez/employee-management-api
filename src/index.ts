import express from "express";
import dotenv from "dotenv";
import { departmentRoutes, employeeRoutes } from "@routes";

// Load environment variables from .env file
dotenv.config();

// Express app
const PORT = process.env.PORT || 3000;
const API_URL = process.env.API_URL || `http://localhost:${PORT}`;
const API_VERSION = process.env.API_VERSION || "v1";

const app = express();

// Middleware
app.use(express.json());

// ROUTES
// Department
app.use(`/api/${API_VERSION}/department`, departmentRoutes);

// Employee
app.use(`/api/${API_VERSION}/employee`, employeeRoutes);

// Health check
app.get(`/api/${API_VERSION}/hello`, (req, res) => {
  res.json({ message: "Hello from the server!" });
});

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on ${API_URL}`);
});
