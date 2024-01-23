import { useState } from "react";

const Signup = () => {
  const [formError, setFormError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Client-side validation
    if (!form.checkValidity()) {
      setFormError("Please fill out all required fields correctly.");
      return;
    }

    fetch(
      "http://localhost/fantasy-store-api/api/login-logout-signup/process-signup.php",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.text())
      .then((data) => {
        if (data.startsWith("Error")) {
          setFormError(data);
        } else {
          // Success
          setFormError(null);
          form.reset(); // Clear the form
        }
      })
      .catch((error) => {
        setFormError("An error occurred. Please try again later.");
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
          <button type="submit" className="login-btn">
            Signup
          </button>
          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
