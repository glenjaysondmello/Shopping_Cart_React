import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      alert("Item is already present in your cart");
      return;
    }
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  return (
    <div>
      <NavBar size={cart.length} setShow={setShow} />
      {show ? (
        <Shop handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} setShow={setShow} />
      )}
      <Footer />
      {console.log(cart)}
    </div>
  );
};

export default App;
