import Item from "../Item/Item";
import { addToOrder } from "../../helpers/orderHelpers";
import "./Items.css";

const Items = ({ items, order, setOrder }) => {
  const handleAddToOrder = (id) => {
    const updatedOrder = addToOrder(order, id);
    setOrder(updatedOrder);
  };

  return (
    <article className="Items">
      {items.map((item) => {
        const { id } = item;
        return (
          <Item key={id} item={item} onClick={() => handleAddToOrder(id)} />
        );
      })}
    </article>
  );
};

export default Items;
