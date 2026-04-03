import { Routes, Route, BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import Head from "./head-html/head.jsx";
import Footer from "./footer-html/footer.jsx";
import MobileNav from "./mobileNav-html/mobileNav.jsx";
import Home from "./home-html/home.jsx";
import CoffeeBeans from "./coffeeBeans-html/coffeeBeans.jsx";
import Cart from "./cart-html/cart.jsx";
import Signup from "./forms-html/signup.jsx";
import Login from "./forms-html/login.jsx";
import { useState } from "react";
import { getCartStorage } from "./assets/js/coffeeBeans";
function App() {
  const [cartItems, setCartItems] = useState(() => getCartStorage());
  const [loggedUser, setLoggedUser] = useState(() => {
    return JSON.parse(localStorage.getItem("loggedUser")) || null;
  });
  return (
    <BrowserRouter basename="/Coffee_webpage_react_ver">
      <Head loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/coffeeBeans"
          element={
            <CoffeeBeans cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/login"
          element={<Login setLoggedUser={setLoggedUser} />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
      <MobileNav />
    </BrowserRouter>
  );
}

export default App;
