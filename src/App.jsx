import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/NavBar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import Signup from "./pages/signup/Signup";
import SignIn from "./pages/signin/SignIn";
import { userContext } from "./context/context";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(getUser);
  }, []);

  const location = useLocation();
  const hidenavfoot =
    location.pathname === "/signup" || location.pathname === "/login";

  return (
    <div>
      <userContext.Provider value={currentUser || null}>
        {!hidenavfoot && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        {!hidenavfoot && <Footer />}
      </userContext.Provider>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
