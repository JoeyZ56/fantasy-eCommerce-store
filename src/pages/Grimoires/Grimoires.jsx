import { useState, useEffect } from "react";

const Grimoires = () => {
  const [grimoires, setGrimoires] = useState([]);

  useEffect(() => {
    const fetchGrimoires = async () => {
      const response = await fetch(
        "http://localhost/fantasy-store-api/api/items/grimoires.php"
      );
      const data = await response.json();
      setGrimoires(data);
    };
    fetchGrimoires();
  }, []);

  return (
    <div>
      <h2>Grimoires</h2>
      <ul>
        {grimoires.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.image_url} alt={item.name} />
            <p>{item.description}</p>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grimoires;
