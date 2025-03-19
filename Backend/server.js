const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth"); // Ensure this path is correct

const app = express();
app.use(bodyParser.json()); // Enable JSON parsing

const cors = require("cors");
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"], // Allow both ports
    credentials: true
}));


// Define routes
app.use("/auth", authRoutes); // Ensure the prefix is "/auth"

const PORT = 5000;

mongoose.connect("mongodb://localhost:27017/myNewDatabase", { 
     
}).then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}).catch(err => console.log("❌ MongoDB Connection Error:", err));
