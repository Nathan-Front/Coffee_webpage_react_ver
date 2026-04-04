import { useState } from "react";
import {
  userLogin,
  RememberMe,
  mergeCartOnLogin,
} from "../../assets/js/login.js";
import { Link, useNavigate } from "react-router-dom";
import { getCartStorage } from "../../assets/js/coffeeBeans.js";

function Login({ setLoggedUser, setCartItems }) {
  const navigate = useNavigate();
  const remembered = JSON.parse(localStorage.getItem("rememberMe"));
  const [isChecked, setIsChecked] = useState(!!remembered);

  const [loginForm, setLoginForm] = useState({
    userName: remembered ?? "", //If no user in storage return ""
    password: "",
  });

  async function handleLogin(e) {
    e.preventDefault();
    if (loginForm.userName.trim() === "") {
      alert("Enter username");
      return;
    }
    if (loginForm.password.trim() === "") {
      alert("Enter password");
      return;
    }
    const result = await userLogin(loginForm); //Need to await for the rememberMe function
    if (result.error) {
      alert(result.error);
      return;
    }
    localStorage.setItem("userLogged", JSON.stringify(result.user));
    await mergeCartOnLogin();
    setLoggedUser(result.user);
    setCartItems(getCartStorage());
    await RememberMe(isChecked, result.user);
    alert("login successful");
    navigate("/");
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function resetForm() {
    setLoginForm({
      userName: "",
      password: "",
    });
  }
  return (
    <>
      <main>
        <form id="loginForm" className="login-form" onSubmit={handleLogin}>
          <h3>Sign In</h3>
          <label htmlFor="loginName">User Name</label>
          <input
            type="text"
            id="loginName"
            placeholder="user name"
            autoComplete="new-user-name"
            name="userName"
            value={loginForm.userName}
            onChange={handleChange}
          />
          <label htmlFor="loginPassword">Password</label>
          <div className="login-password-container">
            <input
              type="password"
              id="loginPassword"
              placeholder="password"
              autoComplete="new-password"
              name="password"
              value={loginForm.password}
              onChange={handleChange}
            />
            <i
              className="fa-solid fa-eye toggle-password"
              data-target="loginPassword"
              role="button"
              tabIndex="0"
              id="eye"
            ></i>
          </div>

          <div className="login-button-container">
            <button type="submit">Login</button>
            <Link to="/signup" id="mobile-signup-form">
              Dont have account yet?
            </Link>
          </div>
          <label className="login-remember-me">
            <input
              id="remember-me"
              type="checkbox"
              name="remember"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <span>Remember me</span>
          </label>
          <div className="cancel-forgot-container">
            <button
              type="button"
              id="login-close-createAccnt-page"
              onClick={resetForm}
            >
              Cancel
            </button>
            <p>
              Forgot{" "}
              <a href="#" id="forgot-password">
                password?
              </a>
            </p>
          </div>
        </form>
      </main>
    </>
  );
}

export default Login;
