import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";

const Signup = () => {
  const [formError, setFormError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Client-side validation
    if (!form.checkValidity()) {
      setFormError("Please fill out all required fields correctly.");
      return;
    }
    setLoading(true);
    fetch("http://localhost/fantasy-store-api/api/user/process-signup.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (!data.success) {
          //handle errors
          const errorsString = data.errors.join("\n");
          setFormError(errorsString);
        } else {
          //handle successful signup
          setFormError(null);
          window.location.href = data.redirect;
        }
      });
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
            {loading ? "Loading" : "Sign Up"}
          </button>
          {formError && <p className="error">{formError}</p>}
        </form>

        <span className="link">
          <Link to="/login">Already a User?</Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
