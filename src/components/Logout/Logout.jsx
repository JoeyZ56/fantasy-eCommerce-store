import { useState, useEffect } from "react";
import "./Logout.scss";

const Logout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logoutMessage, setLogoutMessage] = useState(null);

  useEffect(() => {
    //check if info exists in local storage
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    try {
      const res = await fetch(`${apiKey}/api/user/logout.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (res.ok) {
        const data = await res.json();
        setLogoutMessage(data.message);
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        window.location.href = data.redirect; // Redirect to home page
      } else {
        console.log("Logout failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    isLoggedIn && (
      <div>
        <span onClick={handleLogout} className="logout-btn">
          Logout
        </span>
        {logoutMessage && <p>{logoutMessage}</p>}
      </div>
    )
  );
};

export default Logout;
