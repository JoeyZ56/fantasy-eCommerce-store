import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import "../Product-scss/product.scss";
import addToCart from "../../api/addToCart";
import Buttons from "../../components/Buttons/Buttons";

const Potions = () => {
  const [potions, setPotions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPotion, setSelectedPotion] = useState(null);

  useEffect(() => {
    const fetchPotions = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(
          `${apiKey}/api/items/endpoints/getPotions.php`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch potions items");
        }
        const data = await response.json();
        setPotions(data);
      } catch (error) {
        console.log("Error fetching potions items:", error.message);
      }
    };
    fetchPotions();
  }, []);

  const handleBuyClick = (item) => {
    setSelectedPotion(item);
    setShowModal(true);
  };

  const handleBuyConfirmation = async () => {
    console.log(`Adding ${selectedPotion.name} to cart.`);

    try {
      await addToCart(selectedPotion.item_id);
      console.log(`Successfully added ${selectedPotion.name} to the cart.`);
    } catch (error) {
      console.error(`Error adding ${selectedPotion.name} to cart:`, error);
    }

    setSelectedPotion(null);
    setShowModal(false);
  };

  const handleCancelBuy = () => {
    setSelectedPotion(null);
    setShowModal(false);
  };

  return (
    <div>
      <h2 className="title">Potions</h2>
      <ul className="list">
        {potions.map((item, index) => (
          <li key={index} className="item">
            <h3>{item.name}</h3>
            <img src={item.image_url} alt={item.name} />
            <p>{item.description}</p>
            <p className="item-price">${item.price}</p>
            <button onClick={() => handleBuyClick(item)}>
              Buy {item.name}
            </button>
          </li>
        ))}
      </ul>
      {showModal && selectedPotion && (
        <Modal>
          <div className="modal-container">
            <h1>Would you like to buy a {selectedPotion.name}?</h1>
            <img
              src={selectedPotion.image_url}
              alt={selectedPotion.name}
              width={300}
              height={200}
              className="modal-image"
            />
            <h3>Total: ${selectedPotion.price}</h3>
            <div className="modal-btns">
              <button onClick={handleBuyConfirmation} className="modal-btn">
                Add To Cart
              </button>

              <button onClick={handleCancelBuy} className="modal-btn">
                Take Me back
              </button>
            </div>
          </div>
        </Modal>
      )}
      <div>
        <Buttons />
      </div>
    </div>
  );
};

export default Potions;
