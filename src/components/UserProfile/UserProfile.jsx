import "./UserProfile.scss";

const UserProfile = () => {
  const username = localStorage.getItem("user") || "traveler"; //retieve the username from local storage

  localStorage.setItem("user", username); //store the username in local storage
  console.log("stored username", username);

  if (!username) return null; //if the user is not logged in, return null

  console.log("reteived username", username);
  return (
    <div>
      <h3 className="welcome">Welcome, {username}</h3>
    </div>
  );
};

export default UserProfile;
