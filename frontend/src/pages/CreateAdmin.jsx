import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAdmin = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleCreateAdmin = (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setMessage("All fields are required.");
            return;
        }
        // Simulate admin creation (API call can be added here)
        setMessage(`Admin "${name}" created successfully!`);
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div style={styles.container}>
            <h2>Create New Admin</h2>
            <form style={styles.form} onSubmit={handleCreateAdmin}>
                <input
                    type="text"
                    placeholder="Admin Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                    required
                />
                <input
                    type="email"
                    placeholder="Admin Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                    required
                />
                <input
                    type="password"
                    placeholder="Admin Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                    required
                />
                <button type="submit" style={styles.button}>Create Admin</button>
            </form>

            {message && <p style={styles.message}>{message}</p>}

            <button onClick={() => navigate("/dashboard")} style={styles.backButton}>Back to Dashboard</button>
        </div>
    );
};

const styles = {
    container: { textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" },
    form: { display: "flex", flexDirection: "column", alignItems: "center" },
    input: { padding: "10px", margin: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" },
    button: { marginTop: "10px", padding: "10px 15px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" },
    backButton: { marginTop: "10px", padding: "10px", backgroundColor: "#6c757d", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" },
    message: { color: "green", fontWeight: "bold", marginTop: "10px" }
};

export default CreateAdmin;
