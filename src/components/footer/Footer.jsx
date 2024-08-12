import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <section id="footer">
        <div className="col">
          <img src="/images/shopifyze named logo.png" alt="" />
          <h4>Contact</h4>
          <p>
            <strong>Address: </strong>Lorem ipsum dolor sit amet consectetur
            Lorem ipsum dolor.
          </p>
          <p>
            <strong>Phone: </strong>+91 93212046745 / +01222 3546
          </p>
          <div className="follow">
            <h4>Follow us</h4>
            <div>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>

        <div className="about">
          <h4>About</h4>
          <p>About Us</p>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
          <p>Contact Us</p>
        </div>

        <div className="account">
          <h4>My Account</h4>
          <p>Sign in</p>
          <p>View Cart</p>
          <p>My Wishlist</p>
          <p>Track My Order</p>
          <p>Help</p>
        </div>

        <div className="install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="img">
            <img
              className="appStore"
              src="/images/downloads/app store.png"
              alt=""
            />
            <img
              className="googleStore"
              src="/images/downloads/playstore.png"
              alt=""
            />
          </div>
          <p>Secaured Paymemt Gateways</p>
          <div className="payment-gateway">
            <img src="/images/downloads/pngwing.com.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
