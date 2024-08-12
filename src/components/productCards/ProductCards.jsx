import React from "react";
import "./ProductCards.css";
import { ImCart } from "react-icons/im";

export default function SingleProduct(props) {
  return (
    <div className="pro" id={props.id} key={props.id}>
      <img src={props.src} alt="" />
      <div className="des">
        <span>{props.brand}</span>
        <h5>{props.name}</h5>
      </div>
      <h6>₹{props.price}</h6>
      <button className="cart" onClick={() => props.addToCart(props.id)}>
        <ImCart />
      </button>
    </div>
  );
}
