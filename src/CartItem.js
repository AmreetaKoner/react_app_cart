import React, { useEffect, useState } from "react";
import axios from "axios";
import './CartItem.css';

const CartItem = ({ productId }) => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    // Fetch individual product details from the API
    axios.get(`https://fakestoreapi.com/products/${productId}`).then((response) => {
      setProductData(response.data);
    });
  }, [productId]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="CartItem">
      <h3 className="CartItem_Title">{productData.title}</h3>
      <img src={productData.image} alt={productData.title} className="CartItem_ItemImage" />
      <p className="CartItem_Price">Price: ${productData.price}</p>
    </div>
  );
};

export default CartItem;
