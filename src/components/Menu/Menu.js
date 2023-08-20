import { useState } from 'react';
import Items from '../Items/Items';
import SearchBar from '../SearchBar/SearchBar';
import './Menu.css';

const Menu = ({ items, order, setOrder }) => {
// lift state from search bar to here
const [input, setInput] = useState('');
// handleChange function as well as filter function shld go here
const filteredItems = items.filter((item) => {
  return item.name.toLowerCase().includes(input.toLowerCase());
});
const handleChange = (e) => {
  setInput(e.target.value);
  

};
// then props handed down to both search bar 
// remove input from search bar and bring it to parent- menu
// add input as a prop to searchBar
  const renderContent = () => {
    if (!filteredItems.length) {
      return <div className="Menu__no-content">No items found!</div>;
    }

    return <Items items={filteredItems} order={order} setOrder={setOrder} />;
  }
// use variable instead of filtered items - pass the value to search bar 
  return (
    <div className="Menu">
      <SearchBar items={items} input={input} handleChange={handleChange} />
      {renderContent()}
    </div>
  );
};

export default Menu;
