import PRODUCTS from "../../../config/seed";

const Weapons = () => {
  const Weapons = PRODUCTS.Weapons;

  return (
    <>
      <h1 className="product_title">Armor</h1>
      <div className="product_container">
        <ul className="product_item">
          {Weapons.map((weapon) => (
            <li key={weapon.id} className="product_item-list">
              <h2>{weapon.name}</h2>
              <img
                src={weapon.image}
                alt={weapon.name}
                className="product_img"
              />
              <p>{weapon.description}</p>
              <p>{weapon.price} g</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Weapons;
