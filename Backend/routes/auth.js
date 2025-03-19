const express = require("express");
const bcrypt = require("bcryptjs");
const SuperAdmin = require("../models/SuperAdmin");

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("📌 Login Attempt - Email:", email); 
        console.log("🔑 Received Password:", password);

        // Check if user exists
        const user = await SuperAdmin.findOne({ email });
        console.log("🔍 User Found:", user); 

        if (!user) {
            console.log("❌ User Not Found!");
            return res.status(400).json({ message: "Invalid credentials!" });
        }

        console.log("🛠 Stored Hashed Password:", user.password);

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("🔑 Password Match:", isMatch);

        if (!isMatch) {
            console.log("❌ Incorrect Password!");
            return res.status(400).json({ message: "Invalid credentials!" });
        }

        console.log("✅ Login Successful!");
        res.json({ message: "Login successful!" });

    } catch (error) {
        console.error("❌ Error:", error);
        res.status(500).json({ message: "Server error" });
    }
});


module.exports = router;
