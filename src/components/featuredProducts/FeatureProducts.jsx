import React from "react";
import "./FeatureProcucts.css";
import SingleProduct from "../productCards/ProductCards";

export default function FeauredProducts() {
  return (
    <div>
      <section id="product1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro-container-home">
          <SingleProduct
            id={1}
            key={1}
            src={"/images/Products/f1.jpg"}
            brand={"Addidas"}
            name={"Cartoon Astronaut T-Shirts"}
            price={700}
          />
          <SingleProduct
            id={2}
            key={2}
            src={"/images/Products/f2.jpg"}
            brand={"Addidas"}
            name={"Cartoon Astronaut T-Shirts"}
            price={700}
          />

          <SingleProduct
            id={3}
            key={3}
            src={"/images/Products/f3.jpg"}
            brand={"Addidas"}
            name={"Cartoon Astronaut T-Shirts"}
            price={700}
          />
          <SingleProduct
            id={4}
            key={4}
            src={"/images/Products/f4.jpg"}
            brand={"Addidas"}
            name={"Cartoon Astronaut T-Shirts"}
            price={700}
          />
          <SingleProduct
            id={5}
            key={5}
            src={"/images/Products/f5.jpg"}
            brand={"Addidas"}
            name={"Cartoon Astronaut T-Shirts"}
            price={700}
          />
          <SingleProduct
            id={6}
            key={6}
            src={"/images/Products/f6.jpg"}
            brand={"Addidas"}
            name={"Cartoon Astronaut T-Shirts"}
            price={700}
          />
          <SingleProduct
            id={7}
            key={7}
            src={"/images/Products/f7.jpg"}
            brand={"Addidas"}
            name={"Cartoon Astronaut T-Shirts"}
            price={700}
          />
          <SingleProduct
            id={8}
            key={8}
            src={"/images/Products/f8.jpg"}
            brand={"Addidas"}
            name={"Cartoon Astronaut T-Shirts"}
            price={700}
          />
        </div>
      </section>
    </div>
  );
}
