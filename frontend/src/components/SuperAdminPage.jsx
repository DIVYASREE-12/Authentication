import { useNavigate } from "react-router-dom";

const SuperAdminPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">You are a Super Admin</h1>
      
      <div className="space-x-4">
        <button
          className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg"
          onClick={() => navigate("/create-admin")}
        >
          Create Admin
        </button>

        <button
          className="px-6 py-3 bg-green-500 hover:bg-green-700 text-white font-bold rounded-lg"
          onClick={() => navigate("/manage-admin")}
        >
          Manage Admin
        </button>
      </div>
    </div>
  );
};

export default SuperAdminPage;
