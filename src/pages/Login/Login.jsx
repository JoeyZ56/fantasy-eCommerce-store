import "./Login.scss";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="main-container">
      <div className="login_container">
        <div className="title">
          <h3>Login</h3>
        </div>
        <form onChange={(e) => e.target.value} className="login_form">
          <input type="String" placeholder="Email" required />
          <input type="String" placeholder="Password" required />
          <button type="submit" onClick={handleSubmit} className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
