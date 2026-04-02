import { Routes, Route, BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import Head from "./head-html/head";
import Footer from "./footer-html/footer";
import MobileNav from "./mobileNav-html/mobileNav";
import Home from "./home-html/home";
import CoffeeBeans from "./coffeeBeans-html/coffeeBeans";
import Cart from "./cart-html/cart";
import { useState } from "react";
import { getCartStorage } from "./assets/js/coffeeBeans";
function App() {
  const [cartItems, setCartItems] = useState(() => getCartStorage());

  return (
    <BrowserRouter basename="/Coffee_webpage_react_ver">
      <Head />
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
      </Routes>
      <Footer />
      <MobileNav />
    </BrowserRouter>
  );
}

export default App;
