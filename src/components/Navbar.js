import React from "react";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="navbar">
        <Link to="/" className="logo">
          ReactShop
        </Link>

        <div className="handbag-container">
          <Link to="/cart">
            <BsHandbag className="handbag-icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
