const UserProfile = () => {
  const username = localStorage.getItem("user"); //retieve the username from local storage

  if (!username) return null; //if the user is not logged in, return null

  return (
    <div>
      <h3>Welcome, {username}</h3>
    </div>
  );
};

export default UserProfile;
