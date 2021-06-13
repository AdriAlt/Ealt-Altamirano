import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/Firebase";

const getItems = (id) => {
  const db = getFirestore();
  const itemsCollection = db.collection("items");
  const item = itemsCollection.doc(id);
  return item.get();
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    getItems(detailId).then((resultado) => {
      if (resultado.exists) {
        setItem({ id: resultado.id, ...resultado.data() });
      }
    });
    return;
  }, [detailId]);

  return (
    <main>
      <ItemDetail item={item} />
    </main>
  );
};

export default ItemDetailContainer;
