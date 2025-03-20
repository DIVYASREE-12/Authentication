import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ManageAdmin = () => {
    const navigate = useNavigate();
    const [admins, setAdmins] = useState([
        { id: 1, name: "John Doe", email: "johndoe@example.com" },
        { id: 2, name: "Jane Smith", email: "janesmith@example.com" }
    ]);

    const handleDelete = (id) => {
        setAdmins(admins.filter(admin => admin.id !== id));
    };

    return (
        <div style={styles.container}>
            <h2>Manage Admins</h2>
            <p>View and manage all administrators.</p>

            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {admins.map(admin => (
                        <tr key={admin.id}>
                            <td>{admin.name}</td>
                            <td>{admin.email}</td>
                            <td>
                                <button style={styles.actionButton}>Edit</button>
                                <button style={styles.deleteButton} onClick={() => handleDelete(admin.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={() => navigate("/dashboard")} style={styles.backButton}>Back to Dashboard</button>
        </div>
    );
};

const styles = {
    container: { textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" },
    table: { width: "80%", margin: "20px auto", borderCollapse: "collapse", border: "1px solid #ddd" },
    actionButton: { margin: "5px", padding: "5px 10px", backgroundColor: "#ffc107", color: "black", border: "none", borderRadius: "5px", cursor: "pointer" },
    deleteButton: { margin: "5px", padding: "5px 10px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" },
    backButton: { marginTop: "10px", padding: "10px", backgroundColor: "#6c757d", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }
};

export default ManageAdmin;
