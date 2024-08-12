import React, { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import "./SignIn.css"

export default function SignIn() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({ email: "", password: "" });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fireBaseData = await getDocs(collection(db, "users"));
        const userList = fireBaseData.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userList);
        console.log(userList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validUser = users.find((user) => {
      user.mail === currentUser.mail && user.password === user.password;
      return user;
    });
  };

  return (
    <div className="signIn-wrapper">
      <form>
        <label>Enter mail</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          required
          value={currentUser.email}
        />
        <label>Enter Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          required
          value={currentUser.password}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </form>
      <img src="/public/images/signin.png" alt="" />
    </div>
  );
}
