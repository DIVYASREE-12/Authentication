import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import SuperAdminPage from "../components/SuperAdminPage";
import CreateAdmin from "../components/CreateAdmin";
import ManageAdmin from "../components/ManageAdmin";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/superadmin" element={<SuperAdminPage />} />
        <Route path="/create-admin" element={<CreateAdmin />} />
        <Route path="/manage-admin" element={<ManageAdmin />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
