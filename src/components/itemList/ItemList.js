import React, { Fragment } from "react";
import Item from "../Item/Item";

const ItemList = ({ items = [] }) => {
  return (
    <Fragment>
      {items.map((item) => (
        <div className="col-md-4" key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </Fragment>
  );
};

export default ItemList;
