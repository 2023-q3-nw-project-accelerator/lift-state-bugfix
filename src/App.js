import "./App.css";
import { useEffect, useState } from "react";
import Grid from "./components/Grid/Grid";
import Menu from "./components/Menu/Menu";
import Order from "./components/Order/Order";
// Uncomment to import these helpers
import { addToOrder, removeFromOrder } from "./helpers/orderHelpers";

function App() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState({});

  const API_URL = "https://px32id5fdg.execute-api.us-east-1.amazonaws.com";

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(`${API_URL}/items`);
    const json = await res.json();
    const { data } = json;
    setItems(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToOrder = (id) => {
    const updatedOrder = addToOrder(order, id);
    setOrder(updatedOrder);
  };

  const handleRemoveFromOrder = (id) => {
    const updatedOrder = removeFromOrder(order, id);
    setOrder(updatedOrder);
  };

  const renderLoadingOrMenu = () => {
    if (loading) {
      return <div className="App--loading">Loading...</div>;
    }
    return (
      <Menu
        items={items}
        order={order}
        setOrder={setOrder}
        handleAddToOrder={handleAddToOrder}
      />
    );
  };

  return (
    <div className="App">
      <h1>Our Menu</h1>
      <Grid className="App__menu-grid">
        {renderLoadingOrMenu()}
        <Order
          items={items}
          order={order}
          handleRemoveFromOrder={handleRemoveFromOrder}
        />
      </Grid>
    </div>
  );
}

export default App;
