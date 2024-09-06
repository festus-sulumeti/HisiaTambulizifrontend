import { Route, Routes } from "react-router-dom";

import "./App.css"
import Home from "./components/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import  Userhome from "./components/Userhome"
import Forgotpassword from "./components/pages/Forgotpassword"

function App() {
  return (
    <main className="pb-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/userhome" element={<Userhome />} />
        <Route path="/forgot-password" element={<Forgotpassword/>} />
      </Routes>
    </main>
  );
}

export default App;