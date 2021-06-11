import React, { useState, useEffect, Fragment } from "react";
import Button from "react-bootstrap/Button";
import "./ItemCount.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  useEffect(() => {
    setCount(parseInt(initial));
    return;
  }, [initial]);

  function menosCount() {
    if (count !== 1) {
      setCount(count - 1);
    }
  }

  function masCount() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  return (
    <Fragment>
      <div>
        <ButtonGroup aria-label="Basic example">
          <Button onClick={menosCount} variant="outline-danger" size="xs">
            -
          </Button>
          <Button variant="light" className="m-1">{count}</Button>
          <Button onClick={masCount} variant="outline-success" size="xs">
            +
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <Button
          onClick={() => onAdd(count)}
          variant="outline-secondary "
          size="lg"
          className="mt-1"
        >
          Confirmar Cantidad
        </Button>
      </div>
    </Fragment>
  );
};

export default ItemCount;
