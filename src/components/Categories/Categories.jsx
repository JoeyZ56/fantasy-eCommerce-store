import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="cat_container">
      <div className="cat_list-container">
        <ul className="cat_ul">
          <li>
            <Link to="/armor">Armor</Link>
          </li>
          <li>
            <Link to="/shields">Shields</Link>
          </li>
          <li>
            <Link to="/weapons">Weapons</Link>
          </li>
          <li>
            <Link to="/potions">Potions</Link>
          </li>
          <li>
            <Link to="/grimoires">Grimoires</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
