import React from 'react';
import Table from './Table';

const OrderDetails = () => {
  return (
    <div>
      <h1>Orders</h1>
      <h2>Table 1</h2>
      <Table tableKey="table1" />
      <h2>Table 2</h2>
      <Table tableKey="table2" />
      <h2>Table 3</h2>
      <Table tableKey="table3" />
    </div>
  );
};

export default OrderDetails;
