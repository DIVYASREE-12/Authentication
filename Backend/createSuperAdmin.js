const mongoose = require("mongoose");
const readline = require("readline-sync");
const bcrypt = require("bcryptjs");
const connectDB = require("./config/db");
const SuperAdmin = require("./models/SuperAdmin");

connectDB();

const name = readline.question("Enter SuperAdmin Name: ");
const email = readline.question("Enter SuperAdmin Email: ");

// Check if SuperAdmin already exists
const checkSuperAdmin = async () => {
    try {
        const admin = await SuperAdmin.findOne({ email });

        if (admin) {
            console.log("\nSuperAdmin already exists!");
            const choice = readline.question("Do you want to change the password? (yes/no): ").toLowerCase();

            if (choice === "yes") {
                const newPassword = readline.question("Enter New Password: ", { hideEchoBack: true });
                const confirmNewPassword = readline.question("Confirm New Password: ", { hideEchoBack: true });

                if (newPassword !== confirmNewPassword) {
                    console.log("Passwords do not match!");
                    process.exit(1);
                }

                // Hash the new password before saving
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(newPassword, salt);

                // Update password
                admin.password = hashedPassword;
                await admin.save();
                console.log("Password updated successfully!");
            } else {
                console.log("No changes made.");
            }

            process.exit();
        } else {
            // If no existing admin, proceed with new registration
            const password = readline.question("Enter Password: ", { hideEchoBack: true });
            const confirmPassword = readline.question("Confirm Password: ", { hideEchoBack: true });

            if (password !== confirmPassword) {
                console.log("Passwords do not match!");
                process.exit(1);
            }

            // Hash the password before saving
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newAdmin = new SuperAdmin({ name, email, password: hashedPassword });
            await newAdmin.save();
            console.log("SuperAdmin created successfully!");
            process.exit();
        }
    } catch (error) {
        console.error("Error processing request:", error);
        process.exit(1);
    }
};

checkSuperAdmin();
