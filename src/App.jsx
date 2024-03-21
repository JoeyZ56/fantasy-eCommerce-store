import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Armor from "./pages/Armor/Armor";
import Shields from "./pages/Shields/Shields";
import Weapons from "./pages/Weapons/Weapons";
import Potions from "./pages/Potions/Potions";
import Grimoires from "./pages/Grimoires/Grimoires";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Cart from "./pages/Cart/Cart";

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
        <Route path="/shields" element={<Shields />} />
        <Route path="/potions" element={<Potions />} />
        <Route path="/grimoires" element={<Grimoires />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
