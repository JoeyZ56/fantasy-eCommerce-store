import { useState } from "react";
import "./LogoutButton.scss";

const LogoutButton = () => {
  const [logoutMessage, setLogoutMessage] = useState(null);

  const handleLogout = async () => {
    try {
      const response = await fetch(
        "http://localhost/fantasy-store-api/api/login-logout-signup/logout.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.ok) {
        const data = await response.text();
        setLogoutMessage(data);
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <span onClick={handleLogout} className="logout-btn">
        Logout
      </span>
      {logoutMessage && <p>{logoutMessage}</p>}
    </div>
  );
};

export default LogoutButton;
