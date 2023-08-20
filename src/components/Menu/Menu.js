import { useState } from "react";
import Items from "../Items/Items";
import SearchBar from "../SearchBar/SearchBar";
import "./Menu.css";

const Menu = ({ items, order, setOrder, handleAddToOrder }) => {
  const [input, setInput] = useState("");

  const filteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(input.toLowerCase());
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const renderContent = () => {
    if (!filteredItems.length) {
      return <div className="Menu__no-content">No items found!</div>;
    }

    return <Items items={filteredItems} handleAddToOrder={handleAddToOrder} />;
  };

  return (
    <div className="Menu">
      <SearchBar input={input} handleChange={handleChange} />
      {renderContent()}
    </div>
  );
};

export default Menu;
