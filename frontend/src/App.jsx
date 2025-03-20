import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import CreateAdmin from "./pages/CreateAdmin";
import ManageAdmin from "./pages/ManageAdmin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-admin" element={<CreateAdmin />} />
        <Route path="/manage-admin" element={<ManageAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
