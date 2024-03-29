import "./Categories.scss";

const Categories = () => {
  return (
    <div className="cat_container">
      <h1 className="cat_title">Categories</h1>
      <div className="cat_list-container">
        <ul className="cat_ul">
          <li>
            <a href="/armor">Armor</a>
          </li>
          <li>
            <a href="/shields">Shields</a>
          </li>
          <li>
            <a href="/weapons">Weapons</a>
          </li>
          <li>
            <a href="/potions">Potions</a>
          </li>
          <li>
            <a href="/grimoires">Grimoires</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
