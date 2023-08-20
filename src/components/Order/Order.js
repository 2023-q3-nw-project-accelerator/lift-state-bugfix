import { useState } from "react";
import OrderItem from "../OrderItem/OrderItem";
import { removeFromOrder } from "../../helpers/orderHelpers";
import "./Order.css";

const Order = ({ items, order, handleRemoveFromOrder }) => {
  const orderItems = items
    .filter((item) => Boolean(order[item.id]))
    .map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: order[item.id],
    }));

  const renderContent = () => {
    if (!orderItems.length) {
      return <p>Choose something yummy</p>;
    }
    return orderItems.map((item) => (
      <OrderItem
        key={item.id}
        item={item}
        onClick={() => handleRemoveFromOrder(item.id)}
      />
    ));
  };
  return (
    <div className="Order">
      <h2>Your order</h2>
      {renderContent()}
    </div>
  );
};

export default Order;
