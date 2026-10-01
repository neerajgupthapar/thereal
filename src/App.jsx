import './App.css'
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

import { Routes, Route } from "react-router-dom";
// import { Sidebar } from 'lucide-react';     
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Routes>
        <Route path="/sidebar" element = {<Sidebar />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;