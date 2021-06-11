import React, { useState, createContext, useEffect } from "react";

const CartContext = createContext([]);

const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

  const [itemsTotales, setItemsTotales] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);

  useEffect(() => {
    let precio = 0;
    let itemTot = 0;
    for (let cartItem of cart) {
      itemTot += cartItem.cant;
      precio += cartItem.cant * cartItem.prod.price;
    }
    setItemsTotales(itemTot);
    setPrecioTotal(precio);
  }, [cart]);

  const addItem = (newItem, newQuantity) => {
    let prodIndex = cart.findIndex((item) => item.prod.id === newItem.id);
    if (prodIndex === -1) {
      setCart((cart) => [...cart, { prod: newItem, cant: newQuantity }]);
    } else {
      let modifiedCart = [...cart];
      modifiedCart[prodIndex].cant += newQuantity;
      setCart(modifiedCart);
    }
    console.log(cart);
  }; // agregar cierta cantidad de un ítem al carrito

  const removeItem = (itemId) => {
    const newCart = cart.filter((e) => e.prod.id !== itemId);
    setCart(newCart);
  }; // Remover un item del cart por usando su id

  const clearItems = () => {
    setCart([]);
  }; // Remover todos los items

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearItems,
        itemsTotales,
        precioTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
