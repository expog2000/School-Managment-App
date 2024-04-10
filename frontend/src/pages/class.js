// AnotherComponent.js

import React from 'react';
import Card from '../components/classCard';


const Class = () => {
  const itemDetails = {
    itemName: 'Example Item',
    itemDescription: 'This is an example description of the item.',
    itemPrice: 25.99
  };

  return (
    <div>
      <h1>Item Details</h1>
      <Card {...itemDetails} />
    </div>
  );
};

export default Class;
