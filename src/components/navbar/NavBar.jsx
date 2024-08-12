import React, { useContext, useEffect, useState } from "react";
import "./NavBar.css";
import { json, Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { userContext } from "../../context/context";

export default function Navbar() {
  const loggedUser = useContext(userContext);

  return (
    <div>
      <section id="header">
        <NavLink to={"/"}>
          <img src="/images/shopifyze named logo.png" alt="logo" />
        </NavLink>
        <div>
          <ul id="navbar">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <div className="userInfo">
                <FaUserAlt />
                {loggedUser ? loggedUser.firstName : "Please Log in"}
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
