import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Armor from "./pages/Armor/Armor";
import Weapons from "./pages/Weapons/Weapons";
import Potions from "./pages/Potions/Potions";
import Scrolls from "./pages/Scrolls/Scrolls";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <div className="nav_header">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/armor" element={<Armor />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/potions" element={<Potions />} />
        <Route path="/scrolls" element={<Scrolls />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
