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
const corsOptions = {
  origin: "https://frontend-login-k4ml.onrender.com", // Replace with your frontend's actual origin
};
app.use(cors(corsOptions)); // Enable CORS with specified options
app.use(express.json()); // Parse JSON data in request bodies

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
