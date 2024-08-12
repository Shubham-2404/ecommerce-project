import React, { useState, useEffect, useContext } from "react";
import "./AllProducts.css";
import SingleProduct from "../productCards/ProductCards";
import axios from "axios";
import { Circles } from "react-loader-spinner";
import { userContext } from "../../context/context";

export default function AllProducts() {
  const [data, setData] = useState([]);
  const [apiStatus, setApiStatus] = useState("fetching");
  const [currentUser, setCurrentUser] = useState("user");

  const loggedUser = useContext(userContext);

  useEffect(() => {
    if (loggedUser) {
      setCurrentUser(loggedUser);
    }
  }, [loggedUser]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.shoppersstack.com/shopping/products/alpha"
        );
        setData(response.data.data);
        setApiStatus("fetched");
      } catch (error) {
        setApiStatus("error");
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = async (productId) => {
    if (currentUser && currentUser.cart) {
      if (currentUser.cart.includes(productId)) {
        console.log("Item already added");
      } else {
        const updatedUser = {
          ...currentUser,
          cart: [...currentUser.cart, productId],
        };
        setCurrentUser(updatedUser);
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      }
    } else {
      console.error("No user or cart found");
    }
  };

  const renderComponent = () => {
    switch (apiStatus) {
      case "fetching":
        return (
          <div className="loading">
            <Circles />
          </div>
        );
      case "fetched":
        return (
          <div className="sp-wrapper">
            {data.map((item) => (
              <SingleProduct
                id={item.productId}
                key={item.productId}
                src={item.productImageURLs?.[1]}
                brand={item.brand}
                name={item.name}
                price={item.price}
                addToCart={addToCart}
              />
            ))}
          </div>
        );
      case "error":
        return "Error occurred";
      default:
        return null;
    }
  };

  return <div>{renderComponent()}</div>;
}
