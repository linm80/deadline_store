import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import { commerce } from "./lib/Commerce";

import { Navbar, Products } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);
  return (
    <>
      <Navbar />
      <Products products={products} />
    </>
  );
};

export default App;
