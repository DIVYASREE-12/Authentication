const express = require("express");
const router = express.Router();
const Admin = require("../models/admin");

// Create Admin Route
router.post("/create", async (req, res) => {
    try {
        const { name, email, clusterCode, password } = req.body;

        if (!name || !email || !clusterCode || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin with this email already exists." });
        }

        // Create new admin
        const newAdmin = new Admin({ name, email, clusterCode, password });
        await newAdmin.save();

        res.status(201).json({ message: "Admin created successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;
