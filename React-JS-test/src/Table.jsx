import React, { useState, useEffect } from 'react';

const Table = ({ tableKey }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ordersString = localStorage.getItem(tableKey);
    if (ordersString) {
      const ordersArray = JSON.parse(ordersString);
      setOrders(ordersArray);
    }
  }, [tableKey, orders]);

  const removeOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.orderId !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem(tableKey, JSON.stringify(updatedOrders));
  };

  return (
    <div>
      <ul>
        {orders.map((order) => (
          <li key={order.orderId}>
            {order.dish} - Rs. {order.price } 
            <button onClick={() => removeOrder(order.orderId)}>Remove Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Table;
