import { Routes, Route, BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import Head from "./pages/head-html/head.jsx";
import Footer from "./pages/footer-html/footer.jsx";
import MobileNav from "./pages/mobileNav-html/mobileNav.jsx";
import Home from "./pages/home-html/home.jsx";
import CoffeeBeans from "./pages/coffeeBeans-html/coffeeBeans.jsx";
import Cart from "./pages/cart-html/cart.jsx";
import Signup from "./pages/forms-html/signup.jsx";
import Login from "./pages/forms-html/login.jsx";
import Service from "./pages/services-html/service.jsx";
import Reservation from "./pages/services-html/reservation.jsx";
import About from "./pages/aboutUs-html/about.jsx";
import ToUser from "./pages/forms-html/toUser.jsx";
import { useState } from "react";
import { getCartStorage } from "./assets/js/coffeeBeans";

function App() {
  const [cartItems, setCartItems] = useState(() => getCartStorage());
  const [loggedUser, setLoggedUser] = useState(() => {
    return JSON.parse(localStorage.getItem("userLogged")) || null;
  });

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Head
        loggedUser={loggedUser}
        setLoggedUser={setLoggedUser}
        setCartItems={setCartItems}
      />
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
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              loggedUser={loggedUser}
            />
          }
        />
        <Route path="/service" element={<Service />} />
        <Route
          path="/reservation"
          element={<Reservation loggedUser={loggedUser} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={
            <Login setLoggedUser={setLoggedUser} setCartItems={setCartItems} />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/toUser"
          element={
            <ToUser loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
          }
        />
      </Routes>
      <Footer />
      <MobileNav loggedUser={loggedUser} />
    </BrowserRouter>
  );
}

export default App;
