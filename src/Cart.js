import React, { useEffect, useState } from "react";
import axios from "axios";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    // Fetch cart data from the API
    axios.get("https://fakestoreapi.com/carts/2").then((response) => {
      setCartData(response.data.products);
    });
  }, []);

  return (
    <div className="Cart">
      <h1 className="Cart_Header">Shopping Cart</h1>
      {cartData.map((product) => (
        <CartItem key={product.id} productId={product.productId} />
      ))}
    </div>
  );
};

export default Cart;

