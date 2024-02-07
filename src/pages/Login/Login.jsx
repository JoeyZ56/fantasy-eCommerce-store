import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost/fantasy-store-api/api/login-logout-signup/login.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `email=${encodeURIComponent(
            email
          )}&password=${encodeURIComponent(password)}`,
        }
      );

      if (response.ok) {
        // Login successful, you can redirect or perform other actions
        console.log("Login successful");
      } else {
        const data = await response.text();
        setFormError(data);
      }
    } catch (error) {
      console.error("Error:", error);
      setFormError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="main-container">
      <div className="login_container">
        <div className="title">
          <h3>Login</h3>
        </div>
        <form onSubmit={handleSubmit} className="login_form">
          <input
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span type="submit" className="login-btn">
            Login
          </span>
          {formError && <p className="error">{formError}</p>}
        </form>

        <Link to="/signup">Not a User?</Link>
      </div>
    </div>
  );
};

export default Login;
