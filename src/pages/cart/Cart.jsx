import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../context/context";
import axios from "axios";
import "./Cart.css";

export default function Cart() {
  const loggedUser = useContext(userContext);
  const [products, setProducts] = useState([]);
  const [userCart, setUserCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.shoppersstack.com/shopping/products/alpha"
        );

        setProducts(response.data.data);
        if (loggedUser && loggedUser.cart) {
          setUserCart(loggedUser.cart);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [loggedUser]);

  console.log("Products:", products.length);
  console.log("User Cart:", userCart);

  const commonItems1 = products.filter((product) =>
    userCart.includes(product.productId)
  );

  console.log(commonItems1);
  const totalPrice = commonItems1.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="item-list">
      {commonItems1.map((item) => (
        <>
          <div className="item">
            <img className="img" src={item.productImageURLs[1]} alt="" />
            <div className="itemDetails">
              <div className="brand">{item.brand}</div>
              <div className="name">{item.name}</div>
              <div className="price">₹ {item.price}</div>
              <button>Remove Item</button>
            </div>
          </div>
        </>
      ))}
      <div className="final">
      <div className="total"><strong>Total</strong> :₹ {totalPrice}</div>
      <button>Place Order</button>
      </div>
    </div>
  );
}
