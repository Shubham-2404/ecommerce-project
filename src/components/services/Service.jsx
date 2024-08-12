import React from "react";
import "./Service.css"

export default function Service() {
  return (
    <div>
      <section id="feature">
        <div className="fe-box">
          <img src="/images/feature/f1.png" alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src="/images/feature/f2.png" alt="" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img src="/images/feature/f3.png" alt="" />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src="/images/feature/f4.png" alt="" />
          <h6>Promotion</h6>
        </div>
        <div className="fe-box">
          <img src="/images/feature/f5.png" alt="" />
          <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
          <img src="/images/feature/f6.png" alt="" />
          <h6 id="shop-scroll">24/7 Support</h6>
        </div>
      </section>
    </div>
  );
}
