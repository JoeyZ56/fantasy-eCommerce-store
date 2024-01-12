import PRODUCTS from "../../../config/seed";

const Armor = () => {
  const armors = PRODUCTS.Armors;

  return (
    <>
      <h1 className="product_title">Armor</h1>
      <div className="product_container">
        <ul className="product_item">
          {armors.map((armor) => (
            <li key={armor.id} className="product_item-list">
              <h2>{armor.name}</h2>
              <img src={armor.image} alt={armor.name} className="product_img" />
              <p>{armor.description}</p>
              <p>{armor.price} g</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Armor;
