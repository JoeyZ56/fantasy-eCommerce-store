import { useState, useEffect } from "react";
import "./UserProfile.scss";

const UserProfile = () => {
  const [username, setUsername] = useState(
    localStorage.getItem("user") || "Traveler"
  );

  useEffect(() => {
    const handleStrorageChange = () => {
      const updateuser = localStorage.getItem("user") || "Traveler";
      setUsername(updateuser);
    };
    window.addEventListener("storage", handleStrorageChange);

    return () => {
      window.removeEventListener("storage", handleStrorageChange);
    };
  }, []);

  return (
    <div>
      <h3 className="welcome">Welcome, {username}</h3>
    </div>
  );
};

export default UserProfile;
