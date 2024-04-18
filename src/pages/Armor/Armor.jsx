import { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import { Link } from "react-router-dom";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import "./Armor.scss";
import addToCart from "../../api/addToCart/addToCart";
import Buttons from "../../components/Buttons/Buttons";
import addToWishList from "../../api/addToWishlist";

const Armor = () => {
  const [armor, setArmor] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedArmor, setSelectedArmor] = useState(null);

  useEffect(() => {
    const fetchArmor = async () => {
      try {
        const response = await fetch(
          "http://localhost/fantasy-store-api/api/items/endpoints/getArmors.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // crucial for sessions
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch armor items");
        }

        const data = await response.json();
        setArmor(data);
      } catch (error) {
        console.error("Error fetching armor items:", error.message);
      }
    };

    fetchArmor();
  }, []);

  const handleBuyClick = (item) => {
    setSelectedArmor(item);
    setShowModal(true);
  };

  const handleBuyConfirmation = async () => {
    console.log(`Adding ${selectedArmor.name} to cart.`);

    try {
      await addToCart(selectedArmor.item_id);
      console.log(`Successfully added ${selectedArmor.name} to the cart.`);
    } catch (error) {
      console.error(`Error adding ${selectedArmor.name} to cart:`, error);
    }

    setSelectedArmor(null);
    setShowModal(false);
  };

  const handleCancelBuy = () => {
    setSelectedArmor(null);
    setShowModal(false);
  };

  const handleAddToWishList = async () => {
    try {
      await addToWishList(selectedArmor.item_id);
      console.log(`Successfully added ${selectedArmor.name} to wishlist.`);
    } catch (error) {
      console.error(`Error adding ${selectedArmor.name} to wishlist:`, error);
    }
    setSelectedArmor(null);
    setShowModal(false);
  };

  return (
    <div>
      <h2 className="armor-title">Armors</h2>
      <ul className="armor-list">
        {armor.map((item, index) => (
          <li key={index} className="armor-item">
            <h3>{item.name}</h3>
            <img src={item.image_url} alt={item.name} />
            <p>{item.description}</p>
            <p className="armor-item-price">${item.price}</p>
            <button onClick={() => handleBuyClick(item)}>
              Add {item.name} to Cart
            </button>
          </li>
        ))}
      </ul>
      {showModal && selectedArmor && (
        <Modal>
          <div className="modal-container">
            <h1>Would you like to buy {selectedArmor.name}?</h1>
            <img
              src={selectedArmor.image_url}
              alt={selectedArmor.name}
              width={300}
              height={200}
              className="modal-image"
            />
            <h3>${selectedArmor.price}</h3>
            <div className="modal-btns">
              <button onClick={handleBuyConfirmation} className="modal-btn">
                Add To Cart
              </button>
              <button
                onClick={() => handleAddToWishList()}
                className="modal-btn"
              >
                Add To Wishlist
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

function ArmorsErrorBoundary(props) {
  return (
    <ErrorBoundary
      errorComponent={
        <h2>
          This listing has an error. <Link to="/">Click here</Link> to go back
          to the home page.
        </h2>
      }
    >
      <Armor {...props} />
    </ErrorBoundary>
  );
}

export default ArmorsErrorBoundary;
