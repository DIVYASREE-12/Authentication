const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth"); // Ensure this path is correct
const adminRoutes = require("./routes/adminRoutes"); // Ensure this path is correct

const app = express();

// Middleware
app.use(express.json()); // Replaces body-parser
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"], // Allow both ports
    credentials: true
}));

// Define Routes
app.use("/auth", authRoutes);  // Authentication routes
app.use("/api/admin", adminRoutes); // Admin routes

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/myNewDatabase", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch(err => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
});

// Global Error Handler (Optional)
app.use((err, req, res, next) => {
    console.error("🔥 Server Error:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
});
