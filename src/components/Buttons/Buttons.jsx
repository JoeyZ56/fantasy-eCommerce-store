import { Link } from "react-router-dom";
import "./Buttons.scss";

const Buttons = () => {
  return (
    <div className="container">
      <div className="link-container">
        <Link to="/" className="links">
          Return Home
        </Link>

        <Link to="/cart" className="links">
          Go to Cart
        </Link>
      </div>
    </div>
  );
};

export default Buttons;
