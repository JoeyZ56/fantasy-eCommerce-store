import "./UserProfile.scss";

const UserProfile = () => {
  const username = localStorage.getItem("user") || "Traveler";

  if (!username) {
    return username === "Traveler";
  }
  console.log("Retrieve username ", username);
  return (
    <div>
      <h3 className="welcome">Welcome, {username}</h3>
    </div>
  );
};

export default UserProfile;
