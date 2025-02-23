import { useState } from "react";

const CartScreen = ({ cart }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="border-b p-4">
              <span className="font-semibold">{item.name}</span> - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartScreen;
