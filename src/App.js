import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartContext";
import Cart from "./components/Cart/Cart";
import CarrouselHome from "./components/CarrouselHome/CarrouselHome";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <CarrouselHome />
              <ItemListContainer />
            </Route>
            <Route path="/category/:categoryId" component={ItemListContainer}/>
            <Route path="/detail/:detailId" component={ItemDetailContainer}/>
            <Route exact path="/cart" component={Cart}/>
          </Switch>
          <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
