// ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <p>Votre panier</p>
      {cart && Array.isArray(cart) && cart.length > 0 ? (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - Prix: {item.price} €
              </li>
            ))}
          </ul>
          <p>Total: {calculateTotal()} €</p>
        </div>
      ) : (
        <p>Votre panier est vide.</p>
      )}
    </div>
  );
};

export default ShoppingCart;