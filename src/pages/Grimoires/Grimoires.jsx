import { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import "../Product-scss/product.scss";
import addToCart from "../../api/addToCart";
import Buttons from "../../components/Buttons/Buttons";

const Grimoires = () => {
  const [grimoires, setGrimoires] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedGrimoire, setSelectedGrimoire] = useState(null);

  useEffect(() => {
    const fetchGrimoires = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      try {
        const response = await fetch(
          `${apiKey}/api/items/endpoints/getGrimoires.php`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch grimoires items");
        }
        const data = await response.json();
        setGrimoires(data);
      } catch (error) {
        console.error("Error fetching grimoires items:", error.message);
      }
    };
    fetchGrimoires();
  }, []);

  const handleBuyClick = (item) => {
    setSelectedGrimoire(item);
    setShowModal(true);
  };

  const handleBuyConfirmation = async () => {
    console.log(`Adding ${selectedGrimoire.name} to cart.`);

    try {
      await addToCart(selectedGrimoire.item_id);
      console.log(`Successfully added ${selectedGrimoire.name} to the cart.`);
    } catch (error) {
      console.error(`Error adding ${selectedGrimoire.name} to cart:`, error);
    }

    setSelectedGrimoire(null);
    setShowModal(false);
  };

  const handleCancelBuy = () => {
    setSelectedGrimoire(null);
    setShowModal(false);
  };

  return (
    <div>
      <h2 className="title">Grimoires</h2>
      <ul className="list">
        {grimoires.map((item, index) => (
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
      {showModal && selectedGrimoire && (
        <Modal>
          <div className="modal-container">
            <h1>Would you like to buy {selectedGrimoire.name}?</h1>
            <img
              src={selectedGrimoire.image_url}
              alt={selectedGrimoire.name}
              width={300}
              height={200}
              className="modal-image"
            />
            <h3>Total: ${selectedGrimoire.price}</h3>
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

export default Grimoires;
