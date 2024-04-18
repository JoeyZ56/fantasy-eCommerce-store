import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory for programmatic navigation
import { Link } from "react-router-dom";
import "./Signup.scss";

const Signup = () => {
  const [formError, setFormError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Create history object to use for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Client-side validation
    if (!form.checkValidity()) {
      setFormError("Please fill out all required fields correctly.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost/fantasy-store-api/api/user/process-signup.php",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json", // Ensuring we're expecting a JSON response
          },
        }
      );

      const data = await response.json();
      setLoading(false);

      if (data.success) {
        console.log("Signup successful:", data);
        localStorage.setItem("user", data.username); // Store the username as a plain string
        navigate("/"); // Redirect using React Router, not window.location.href
      } else {
        // Handle errors
        const errorsString = data.errors.join("\n");
        setFormError(errorsString);
      }
    } catch (error) {
      console.error("Failed to signup:", error);
      setFormError("Failed to signup: " + error.message);
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <div className="signup_container">
        <div className="title">
          <h3>Create An Account</h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className="signup_form"
          method="post"
          noValidate
        >
          <input type="text" name="name" placeholder="Username" required />
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
          <button type="submit" className="signup-btn">
            {loading ? "Loading..." : "Sign Up"}
          </button>
          {formError && <p className="error">{formError}</p>}
        </form>
        <div className="link-container">
          <Link to="/login" className="link">
            Already a User?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
