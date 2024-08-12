import React, { useState } from "react";
import { json, NavLink } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { auth, db } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [cart, setCart] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== cnfPassword) {
      setError("Passwords do not match");
      toast.error("Password does not match");
      return;
    }

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        mail,
        password
      );
      const user = userCredentials.user;

      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        mobile,
        mail,
        cart,
        password,
      });

      const localStorageUser = {
        firstName,
        lastName,
        mobile,
        mail,
        password,
        cart,
      };
      console.log(localStorageUser);
      localStorage.setItem("currentUser", JSON.stringify(localStorageUser));
      const getuser = localStorage.getItem("currentUser");
      console.log("currentuser", JSON.parse(getuser));

      toast.success("Sign up successful!");
      //   navigate("/"); // Navigate to home page after successful sign up
    } catch (error) {
      setError(error.message);
      toast.error("Error: " + error.message);
    }
  };

  return (
    <section className="signup-wrapper">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="custom-toast-container"
        transition={Bounce}
      />
      <img className="signup-img" src="/images/signin.png" alt="" />
      <form onSubmit={handleSubmit} className="signup">
        <div className="inputFields">
          <div className="inputField">
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="inputField">
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="inputField">
            <label>Mobile</label>
            <input
              type="number"
              value={mobile}
              required
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="inputField">
            <label>Email</label>
            <input
              type="email"
              value={mail}
              required
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="inputField">
            <label>Password</label>
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="inputField">
            <label>Confirm Password</label>
            <input
              type="password"
              value={cnfPassword}
              required
              onChange={(e) => setCnfPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>

        {/* <NavLink to={"./SignIn.jsx"}>Already have an account.</NavLink> */}
      </form>
    </section>
  );
}
