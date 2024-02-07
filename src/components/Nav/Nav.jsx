import { Menu } from "@headlessui/react";
import "./Nav.scss";
import LogoutButton from "../LogoutButton/LogoutButton";
import Logo from "../../assets/myssticrealmslogo.png";

export default function Navbar() {
  return (
    <Menu>
      <div className="menu-container">
        <header className="nav-header">
          <img src={Logo} alt="Fantasy Store" className="logo" />
          {/* <h1 className="nav-title">Fantasy Store</h1> */}
        </header>
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
              <a className={`${active && "bg-blue-500"}`} href="/">
                🏰 Home
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a className={`${active && "bg-blue-500"}`} href="/armor">
                🔰 Armor
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a className={`${active && "bg-blue-500"}`} href="/shields">
                🛡️ Shields
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a className={`${active && "bg-blue-500"}`} href="/weapons">
                ⚔️ Weapons
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a className={`${active && "bg-blue-500"}`} href="/potions">
                🧪 Potions
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a className={`${active && "bg-blue-500"}`} href="/grimoires">
                📖 Grimoires
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a className={`${active && "bg-blue-500"}`} href="/wishlist">
                📜 Wishlist
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a className={`${active && "bg-blue-500"}`} href="/cart">
                🛒 Cart
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a className={`${active && "bg-blue-500"}`} href="/signup">
                Create Account
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a className={`${active && "bg-blue-500"}`} href="/login">
                Login
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            <div className="logout-btn-container">
              <LogoutButton />
            </div>
          </Menu.Item>
        </Menu.Items>
      </div>
    </Menu>
  );
}
