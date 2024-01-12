import PRODUCTS from "../../../config/seed";

const Potions = () => {
  const Potions = PRODUCTS.Potions;

  return (
    <>
      <h1 className="product_title">Armor</h1>
      <div className="product_container">
        <ul className="product_item">
          {Potions.map((potion) => (
            <li key={potion.id} className="product_item-list">
              <h2>{potion.name}</h2>
              <img
                src={potion.image}
                alt={potion.name}
                className="product_img"
              />
              <p>{potion.description}</p>
              <p>{potion.price} g</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Potions;
