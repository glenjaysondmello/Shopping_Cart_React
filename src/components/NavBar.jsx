import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SiShopify } from "react-icons/si";
import "../styles/navbar.css";

const NavBar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="nav_box">
        <div>
          <SiShopify size={24} />
          <span className="my_shop">Books Store</span>
        </div>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
