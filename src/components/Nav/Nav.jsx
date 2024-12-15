import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import Logout from "../Logout/Logout";
import Logo from "../../assets/mysstic-realms.png";
import UserProfile from "../UserProfile/UserProfile";
// import SearchBar from "../SearchBar/SearchBar";

export default function Navbar() {
  return (
    <Menu>
      <div className="menu-container">
        <header className="nav-header">
          <img src={Logo} alt="Fantasy Store" className="logo" />
          <div className="user-welcome">
            <UserProfile />
          </div>
        </header>
        <div className="header_title">
          <h1>Mysstic Realms</h1>
        </div>
        <br />
        <Menu.Button className="menu-btn">
          {" "}
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </Menu.Button>
        <Menu.Items className="menu_items">
          <Menu.Item>
            {({ active }) => (
              <Link className={`${active && "bg-blue-500"}`} to="/">
                🏰 Home
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link className={`${active && "bg-blue-500"}`} to="/armor">
                🔰 Armor
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link className={`${active && "bg-blue-500"}`} to="/shields">
                🛡️ Shields
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link className={`${active && "bg-blue-500"}`} to="/weapons">
                ⚔️ Weapons
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link className={`${active && "bg-blue-500"}`} to="/potions">
                🧪 Potions
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link className={`${active && "bg-blue-500"}`} to="/grimoires">
                📖 Grimoires
              </Link>
            )}
          </Menu.Item>
          {/* <Menu.Item>
            {({ active }) => (
              <Link className={`${active && "bg-blue-500"}`} to="/wishlist">
                📜 Wishlist
              </Link>
            )}
          </Menu.Item> */}
          <Menu.Item>
            {({ active }) => (
              <Link className={`${active && "bg-blue-500"}`} to="/cart">
                🛒 Cart
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link className={`${active && "bg-blue-500"}`} to="/signup">
                Create Account
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link className={`${active && "bg-blue-500"}`} to="/login">
                Login
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            <div className="logout-btn-container">
              <Logout />
            </div>
          </Menu.Item>
        </Menu.Items>
      </div>
    </Menu>
  );
}
