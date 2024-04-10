
import React from 'react';

const Card = ({ itemName, itemDescription, itemPrice }) => {
  return (
    <div className="card">
      <h2>{itemName}</h2>
      <p>{itemDescription}</p>
      <p>Price: ${itemPrice}</p>
    </div>
  );
};

export default Card;
