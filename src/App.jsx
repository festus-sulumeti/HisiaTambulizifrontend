import { Route, Routes } from "react-router-dom";
import { AuthProvider } from './components/Auth/AuthContext'; // Import the AuthProvider
import "./App.css";
import Home from "./components/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Userhome from "./components/Userhome";
import Forgotpassword from "./components/pages/Forgotpassword";
import ProtectedRoute from './components/Auth/ProtectedRoute'; // Import ProtectedRoute

function App() {
  return (
    <AuthProvider>
      <main className="pb-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userhome" element={<ProtectedRoute element={<Userhome />} />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;
