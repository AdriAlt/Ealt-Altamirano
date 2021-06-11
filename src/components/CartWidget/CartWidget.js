import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { itemsTotales } = useContext(CartContext);
  return (
      <Link to="/cart">
        <IconContext.Provider value={{ size: "2em", color: "grey" }}>
            <FaShoppingCart />
            <span className="badge badge-warning" id="lblCartCount">
              {itemsTotales}
            </span>
        </IconContext.Provider>
      </Link>
  );
};

export default CartWidget;
