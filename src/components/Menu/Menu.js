import Items from '../Items/Items';
import SearchBar from '../SearchBar/SearchBar';
import './Menu.css';

const Menu = ({ filteredItems, items, order, setOrder, setFilteredItems }) => {

  const renderContent = () => {
    if (!filteredItems.length) {
      return <div className="Menu__no-content">No items found!</div>;
    }

    return <Items items={filteredItems} order={order} setOrder={setOrder} />;
  }

  return (
    <div className="Menu">
      <SearchBar items={items} setFilteredItems={setFilteredItems} />
      {renderContent()}
    </div>
  );
};

export default Menu;
