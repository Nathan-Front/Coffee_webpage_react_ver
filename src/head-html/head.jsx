import { Link } from "react-router-dom";

function Head() {
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
              <Link to="/services" className="nav-links">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="nav-links">
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
              <p className="logged-in-user">Guest</p>
            </div>
            <button type="button" className="logout-button">
              Sign out
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Head;
