import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(email, password);

    if (response.success) {
      navigate("/superadmin"); // Redirect if login is successful
    } else {
      setError(response.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-2xl font-bold mb-4">Super Admin Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="w-full bg-black text-white p-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
