import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

const SearchItems = () => {
  const [items, setItems] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://localhost/api/items/endpoints/getSearch.php?search=${encodeURIComponent(
          searchTerm
        )}`
      );
      if (!response.ok) throw new Error("Failed to fetch items");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
      setItems([]);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {items.map((item) => (
          <li key={item.item_id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchItems;
