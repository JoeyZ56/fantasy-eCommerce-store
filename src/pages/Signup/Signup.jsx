const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch("api/signup.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="main-container">
      <div className="login_container">
        <div className="title">
          <h3>Create An Account</h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className="login_form"
          method="post"
          noValidate
        >
          <input type="text" name="username" placeholder="Username" required />
          <input type="text" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            required
          />
          <button type="submit" className="login-btn">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
