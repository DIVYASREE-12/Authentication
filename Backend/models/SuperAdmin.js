const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const SuperAdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true, collection: "superadmins" }); // 👈 Explicitly set collection name

// Hash password before saving
SuperAdminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    // ✅ Avoid double hashing if password is already hashed
    if (this.password.startsWith("$2b$")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});


module.exports = mongoose.model("SuperAdmin", SuperAdminSchema);

