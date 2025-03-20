import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <h2>Welcome to the SuperAdmin Dashboard</h2>
            <p>You are successfully logged in!</p>

            <div style={styles.card}>
                <h3>Admin Management</h3>
                <p>Manage all administrators from here.</p>
                <button style={styles.button} onClick={() => navigate("/create-admin")}>Create Admin</button>
                <button style={styles.button} onClick={() => navigate("/manage-admin")}>Manage Admin</button>
            </div>
        </div>
    );
};

const styles = {
    container: { textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" },
    card: { backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", display: "inline-block", marginTop: "20px" },
    button: { margin: "10px", padding: "10px 15px", fontSize: "16px", cursor: "pointer", border: "none", borderRadius: "5px", backgroundColor: "#007bff", color: "white", transition: "0.3s" },
};

export default DashboardPage;
