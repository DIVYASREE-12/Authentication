import { useState } from "react";

const CreateAdmin = () => {
  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    role: "Admin", // Default role
  });

  const handleChange = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/admins", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adminData),
      });

      if (response.ok) {
        alert("Admin created successfully!");
        setAdminData({ name: "", email: "", role: "Admin" });
      } else {
        alert("Error creating admin!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Create Admin</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Admin Name"
            value={adminData.name}
            onChange={handleChange}
            className="w-full p-2 rounded text-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            value={adminData.email}
            onChange={handleChange}
            className="w-full p-2 rounded text-black"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded"
          >
            Create Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAdmin;
