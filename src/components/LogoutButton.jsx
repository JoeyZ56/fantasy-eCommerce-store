import { useState } from "react";

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
      <button onClick={handleLogout}>Logout</button>
      {logoutMessage && <p>{logoutMessage}</p>}
    </div>
  );
};

export default LogoutButton;
