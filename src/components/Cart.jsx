import React from "react";
import { IoIosBackspace } from "react-icons/io";
import "../styles/cart.css";

const Cart = ({ cart, setCart, setShow }) => {
  const removeItem = (id) => {
    const remove = cart.filter((item) => id !== item.id);
    setCart(remove);
  };

  const updateQuantity = (id, count) => {
    const countUpdate = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + count) }
        : item
    );
    setCart(countUpdate);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <button className="back-button" onClick={() => setShow(true)}>
        <IoIosBackspace size={24} />
      </button>
      <div className="cart-container">
        {cart.length === 0 ? (
          <h3 id="no-items">No Items in the Cart</h3>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-details">
                <img
                  src={item.img}
                  alt={item.title}
                  className="cart-item-image"
                />
                <p className="cart-item-title">{item.title}</p>
              </div>

              <div className="cart-item-quantity">
                <button
                  className="quantity-button"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <h3 className="quantity-display">{item.quantity}</h3>
                <button
                  className="quantity-button"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>

              <div className="cart-item-price">
                <span className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  className="remove-button"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-total">
        <h2>
          <span id="total">Total: </span>{" "}
          <span className="item-price">${totalPrice.toFixed(2)}</span>
        </h2>
      </div>
    </>
  );
};

export default Cart;
