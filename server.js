import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

// Configure environment variables
dotenv.config();

// Connect to the database
connectDB();

// Create the Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON data in request bodies

// CORS Configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://frontend-login-k4ml.onrender.com"); // Replace with your frontend's actual origin
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Routes
app.use("/api/v1/auth", authRoutes); // Use the authRoutes module for authentication routes

// Basic route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

// Port configuration
const PORT = process.env.PORT || 8000; // Use provided PORT or default to 8000

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.DEV_MODE} mode on port ${PORT}`);
});
