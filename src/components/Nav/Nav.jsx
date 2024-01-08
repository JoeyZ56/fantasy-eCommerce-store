import { Menu } from "@headlessui/react";
import "./Nav.scss";

export default function Navbar() {
  return (
    <Menu>
      <div className="menu_container">
        <header>
          <h1 className="title">Fantasy Store</h1>
        </header>
        <br />
        <Menu.Button className="menu_btn">
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
                🛡️ Armor
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
              <a className={`${active && "bg-blue-500"}`} href="/scrolls">
                📜 Scrolls
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "bg-blue-500"}`}
                href="/create-account"
              >
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
            {({ active }) => (
              <a
                className={`${active && "bg-blue-500"}`}
                href="/account-settings"
              >
                Logout
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </div>
    </Menu>
  );
}
