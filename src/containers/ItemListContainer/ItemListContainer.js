import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../../components/itemList/ItemList";
import { getFirestore } from "../../firebase/Firebase";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("items");

    if (categoryId) {
      const filter = itemsCollection.where("categoryId", "==", categoryId);
      const promFilter = filter.get();

      promFilter.then((snapshot) => {
        if (snapshot.size > 0) {
          setItems(
            snapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        }
      });
    } else {
      const prom = itemsCollection.get();
      prom.then((snapshot) => {
        if (snapshot.size > 0) {
          setItems(
            snapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        }
      });
    }
  }, [categoryId]);

  return (
    <Fragment>
      <div className="container  d-flex justify-content-center align-items-center h-100">
        <div className="row font-weight-lighter">
          <ItemList items={items} />
        </div>
      </div>
    </Fragment>
  );
};

export default ItemListContainer;