import React from "react";
import "./Item.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
      <div className="card text-center bg-light animate__animated animate__fadeInUp">
        <div className="overflow">
          <img
            src={item.pictureURL}
            alt="a wallpaper"
            className="card-img-top"
          />
        </div>
        <div>
          <Button
            as={Link}
            to={`/detail/${item.id}`}
            variant="outline-dark"
            block
          >
            Detalles
          </Button>
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{item.title}</h4>
          <small className="card-text text-secondary">{item.description}</small>
        </div>
      </div>

  );
};

export default Item;
