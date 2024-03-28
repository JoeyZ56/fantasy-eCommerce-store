import { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import "./Weapons.scss";
import addToCart from "../../api/addToCart/addToCart";
import Buttons from "../../components/Buttons/Buttons";

const Weapons = () => {
  const [weapons, setWeapons] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedWeapon, setSelectedWeapon] = useState(null);

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const response = await fetch(
          "http://localhost/fantasy-store-api/api/items/endpoints/getWeapons.php"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weapons items");
        }
        const data = await response.json();
        setWeapons(data);
      } catch (error) {
        console.log("Error fetching weapons items:", error.message);
      }
    };
    fetchWeapons();
  }, []);

  const handleBuyClick = (item) => {
    setSelectedWeapon(item);
    setShowModal(true);
  };

  const handleBuyConfirmation = () => {
    // Implement logic for buying the selected armor
    // You might want to make an API call, update the state, etc.
    console.log(`Buying ${selectedWeapon.name}`);
    // Clear the selected armor and close the modal
    setSelectedWeapon(null);
    addToCart(selectedWeapon.item_id);
    setShowModal(false);
  };

  const handleCancelBuy = () => {
    setSelectedWeapon(null);
    setShowModal(false);
  };

  return (
    <div>
      <h2 className="weapon-title">Weapons</h2>
      <ul className="weapon-list">
        {weapons.map((item, index) => (
          <li key={index} className="weapon-item">
            <h3>{item.name}</h3>
            <img src={item.image_url} alt={item.name} />
            <p>{item.description}</p>
            <p className="weapon-item-price">${item.price}</p>
            <button onClick={() => handleBuyClick(item)}>
              Buy {item.name}
            </button>
          </li>
        ))}
      </ul>
      {showModal && selectedWeapon && (
        <Modal>
          <div className="modal-container">
            <h1>Would you like to buy a {selectedWeapon.name}?</h1>
            <img
              src={selectedWeapon.image_url}
              alt={selectedWeapon.name}
              width={300}
              height={200}
              className="modal-image"
            />
            <h3>${selectedWeapon.price}</h3>
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

export default Weapons;
