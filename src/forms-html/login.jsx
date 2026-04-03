import React from "react";

function Login() {
  return (
    <>
      <main>
        <form id="loginForm" className="login-form" novalidate>
          <h3>Sign In</h3>
          <label htmlFor="loginName">User Name</label>
          <input
            type="text"
            id="loginName"
            placeholder="user name"
            autoComplete="new-user-name"
          />
          <label htmlFor="loginPassword">Password</label>
          <div className="login-password-container">
            <input
              type="password"
              id="loginPassword"
              placeholder="password"
              autoComplete="new-password"
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
            <button type="button" id="mobile-signup-form">
              Dont have account yet?
            </button>
          </div>
          <label className="login-remember-me">
            <input
              id="remember-me"
              type="checkbox"
              checked="checked"
              name="remember"
            />
            <span>Remember me</span>
          </label>
          <div className="cancel-forgot-container">
            <button type="button" id="login-close-createAccnt-page">
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
