import PRODUCTS from "../../../config/seed";

const Scrolls = () => {
  const Scrolls = PRODUCTS.Scrolls;

  return (
    <>
      <h1 className="product_title">Armor</h1>
      <div className="product_container">
        <ul className="product_item">
          {Scrolls.map((scroll) => (
            <li key={scroll.id} className="product_item-list">
              <h2>{scroll.name}</h2>
              <img
                src={scroll.image}
                alt={scroll.name}
                className="product_img"
              />
              <p>{scroll.description}</p>
              <p>{scroll.price} g</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Scrolls;
