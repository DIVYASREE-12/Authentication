import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons

const CreateAdmin = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [clusterCode, setClusterCode] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleCreateAdmin = async (e) => {
      e.preventDefault();
      
      if (!name || !email || !clusterCode || !password) {
          setMessage("All fields are required.");
          return;
      }
  
      try {
          const response = await fetch("http://localhost:5000/api/admin/create", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email, clusterCode, password }),
          });
  
          const data = await response.json();
  
          if (response.ok) {
              setMessage(`Admin "${name}" created successfully!`);
              setName("");
              setEmail("");
              setClusterCode("");
              setPassword("");
          } else {
              setMessage(data.message || "Failed to create admin.");
          }
      } catch (error) {
          setMessage("Server error. Please try again later.");
          console.error("Error:", error);
      }
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
                    type="text"
                    placeholder="Cluster Code"
                    value={clusterCode}
                    onChange={(e) => setClusterCode(e.target.value)}
                    style={styles.input}
                    required
                />
                <div style={styles.passwordContainer}>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Admin Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                        required
                    />
                    <span onClick={() => setShowPassword(!showPassword)} style={styles.icon}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
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
    passwordContainer: { position: "relative", width: "320px", display: "flex", alignItems: "center" },
    icon: { position: "absolute", right: "10px", cursor: "pointer" },
    button: { marginTop: "10px", padding: "10px 15px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" },
    backButton: { marginTop: "10px", padding: "10px", backgroundColor: "#6c757d", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" },
    message: { color: "green", fontWeight: "bold", marginTop: "10px" }
};

export default CreateAdmin;
