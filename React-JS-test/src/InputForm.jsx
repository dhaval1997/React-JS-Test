import React, { useState } from 'react';

const InputForm = () => {
  const [userInput, setUserInput] = useState({
    orderId: '',
    price: '',
    dish: '',
    table: 'table1',
  });

  const userInputHandler = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!userInput.dish || !userInput.orderId || !userInput.price || !userInput.table) {
      alert('All the fields are mandatory');
    } else {
      const ordersString = localStorage.getItem(userInput.table);
      let ordersArray = [];
      if (ordersString) {
        ordersArray = JSON.parse(ordersString);
      }
      ordersArray.push(userInput);
      localStorage.setItem(userInput.table, JSON.stringify(ordersArray));
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="orderId">Unique Order ID</label>
        <input type="number" name="orderId" value={userInput.orderId} onChange={userInputHandler} />
        <label htmlFor="price">Choose Price</label>
        <input type="number" name="price" value={userInput.price} onChange={userInputHandler} />
        <label htmlFor="dish">Choose Dish</label>
        <input type="text" name="dish" value={userInput.dish} onChange={userInputHandler} />
        <label htmlFor="table">Choose Table</label>
        <select name="table" value={userInput.table} onChange={userInputHandler}>
          <option value="table1">Table 1</option>
          <option value="table2">Table 2</option>
          <option value="table3">Table 3</option>
        </select>
        <button type="submit">Add to Bill</button>
      </div>
    </form>
  );
};

export default InputForm;
