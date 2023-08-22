import { useState } from "react";
import Items from "../Items/Items";
import SearchBar from "../SearchBar/SearchBar";
import "./Menu.css";

const Menu = ({ items, order, handleAddToOrder }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const filteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(input.toLowerCase());
  });

  const renderContent = () => {
    if (!filteredItems.length) {
      return <div className="Menu__no-content">No items found!</div>;
    }
    return (
      <Items
        items={filteredItems}
        order={order}
        handleAddToOrder={handleAddToOrder}
      />
    );
  };

  return (
    <div className="Menu">
      <SearchBar items={items} handleChange={handleChange} input={input} />
      {renderContent()}
    </div>
  );
};

export default Menu;
