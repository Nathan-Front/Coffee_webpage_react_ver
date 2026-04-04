import { Link } from "react-router-dom";
import { useRef } from "react";
import { getCartStorage } from "../../assets/js/coffeeBeans.js";

function Head({ loggedUser, setLoggedUser, setCartItems }) {
  const userRef = useRef(null);
  function signOut() {
    setLoggedUser(null);
    localStorage.removeItem("userLogged");
    setCartItems(getCartStorage());
    alert("logged out.");
  }
  return (
    <>
      <div className="header-nav-container">
        <header>
          <img
            src={`${import.meta.env.BASE_URL}images/index/logo/coffee-cup.png`}
            alt="webpage-logo"
            loading="lazy"
          />
          <h1 className="web-name">UrKofi</h1>
        </header>
        <nav className="webpage-navigation">
          <ul id="navigation-menu">
            <li>
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/CoffeeBeans" className="nav-links">
                Coffee Beans
              </Link>
            </li>
            <li>
              <Link to="/Service" className="nav-links">
                Services
              </Link>
            </li>
            <li>
              <Link to="/About" className="nav-links">
                About Us
              </Link>
            </li>
            <li>
              <p>
                <Link to="/login" className="to-login-html-button">
                  Login
                </Link>
                or
                <Link to="/signup" className="to-register-html-button">
                  Sign up
                </Link>
              </p>
            </li>
          </ul>
          <div className="user-container">
            <div>
              <span>Hi</span>
              <p ref={userRef} className="logged-in-user">
                {loggedUser?.userName || "Guest"}
              </p>
            </div>
            <button type="button" className="logout-button" onClick={signOut}>
              Sign out
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Head;
