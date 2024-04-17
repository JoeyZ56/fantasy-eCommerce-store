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
        "http://localhost/fantasy-store-api/api/user/login.php",
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
        const data = await response.json();
        if (data.success && data.username) {
          console.log("Login successful:", data);
          localStorage.setItem(
            "user",
            JSON.stringify({ username: data.username })
          );
          window.location.href = "/";
        } else {
          setFormError("Login failed: " + data.error);
        }
      } else {
        const errorData = await response.text();
        setFormError("Failed to login: " + errorData);
      }
    } catch (error) {
      console.error("Failed to login:", error);
      setFormError("Failed to login: " + error.message);
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
          <button type="submit" className="login-btn">
            Login
          </button>
          {formError && <p className="error">{formError}</p>}
        </form>

        <Link to="/signup">Not a User?</Link>
      </div>
    </div>
  );
};

export default Login;
