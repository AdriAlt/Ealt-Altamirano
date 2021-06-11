import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext/CartContext";

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(0);

  const { addItem } = useContext(CartContext);

  const addHandler = counter => {
    setCount(counter);
  };

  const terminarCompra = () => {
    addItem(item, count);
  };

  return (
    <div className="site-section">
      <div className="container">
        <div className="bg-light py-4 mb-4 shadow">
          <div className="row mx-4 my-4 product-item-2 align-items-start">
            <div className="col-md-6 mb-5 mb-md-0">
              <img
                src={item.pictureURL}
                alt="producto"
                className="img-fluid"
              />
            </div>
            <div className="col-md-5 ml-auto product-title-wrap text-left text-dark">
              <h3 className="text-dark mb-4 font-weight-bold">
                {item.title}
              </h3>
              <p className="mb-4 text-secondary">{item.description}</p>

              <div className="mb-4">
                <h3 className="text-black font-weight-bold h5 text-left">
                  Precio:
                  </h3>
                <div className="price text-left">${item.price}</div>
                <div className="mb-4">
                  {count === 0 ? (
                    <ItemCount
                      stock={item.stock}
                      initial="1"
                      onAdd={addHandler}
                    />
                  ) : (
                      <Button
                        onClick={terminarCompra}
                        as={Link}
                        to={"/cart"}
                        variant="btn btn-outline-secondary "
                        size="lg"
                      >
                        Añadir al carrito
                      </Button>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
