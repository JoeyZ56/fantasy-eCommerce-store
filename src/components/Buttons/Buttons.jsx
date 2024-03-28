import "./Buttons.scss";

const Buttons = () => {
  const handleReturnHome = () => {
    window.location.href = "/";
  };

  const handleCartPage = () => {
    window.location.href = "/cart";
  };

  return (
    <div>
      <div className="buttons-container">
        <button onClick={handleReturnHome} className="buttons">
          Return Home
        </button>
        <button onClick={handleCartPage} className="buttons">
          Go to Cart
        </button>
      </div>
    </div>
  );
};

export default Buttons;
