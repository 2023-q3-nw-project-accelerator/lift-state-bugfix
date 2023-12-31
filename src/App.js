import Grid from './components/Grid/Grid';
import Menu from './components/Menu/Menu';
import Order from './components/Order/Order';
// Uncomment to import these helpers
// import { addToOrder, removeFromOrder } from './helpers/orderHelpers';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [order, setOrder] = useState({});

  const API_URL = 'https://px32id5fdg.execute-api.us-east-1.amazonaws.com';

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(`${API_URL}/items`);
    const json = await res.json();
    const { data } = json;
    setItems(data);
    setFilteredItems(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderLoadingOrMenu = () => {
    if (loading) {
      return <div className="App--loading">Loading...</div>;
    }
    return (
      <Menu
        filteredItems={filteredItems}
        items={items}
        order={order}
        setOrder={setOrder}
        setFilteredItems={setFilteredItems}
      />
    );
  };

  return (
    <div className="App">
      <h1>Our Menu</h1>
      <Grid className="App__menu-grid">
        {renderLoadingOrMenu()}
        <Order items={items} />
      </Grid>
    </div>
  );
}

export default App;
