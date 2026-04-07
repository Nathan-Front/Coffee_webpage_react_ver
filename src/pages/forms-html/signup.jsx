import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMobile } from "../../hooks/useIsMobile";
import {
  createAccount,
  validateEmail,
  checkEmail,
  checkUser,
} from "../../assets/js/signup";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    familyName: "",
    firstName: "",
    middleName: "",
    bDay: "",
    address: "",
    email: "",
    contact: "",
    userName: "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const [error, setError] = useState("");
  function submitForm(e) {
    e.preventDefault();
    setError("");
    if (!validateEmail(form.email)) {
      setError("Enter a valid email");
      return;
    }
    const emailExist = checkEmail(form.email);
    if (emailExist) {
      alert("An account with this email already exists.");
      return;
    }
    const userExist = checkUser(form.userName);
    if (userExist) {
      alert("Username already taken.");
      return;
    }
    createAccount(form);
    alert("Account created");
    navigate("/Login");
  }
  function resetForm() {
    setForm({
      familyName: "",
      firstName: "",
      middleName: "",
      bDay: "",
      address: "",
      email: "",
      contact: "",
      userName: "",
      password: "",
    });
  }
  useMobile();

  return (
    <>
      <main>
        <form id="signup-form" className="sign-up-form" onSubmit={submitForm}>
          <h3>Create account</h3>
          <label htmlFor="lName">Family Name</label>
          <input
            type="text"
            id="lName"
            className="signup-input"
            name="familyName"
            placeholder="family name"
            value={form.familyName}
            onChange={handleChange}
            required
          />
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            id="fName"
            className="signup-input"
            name="firstName"
            placeholder="first name"
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <label htmlFor="mName">Middle Name (Optional)</label>
          <input
            type="text"
            id="mName"
            className="signup-input"
            name="middleName"
            placeholder="middle name"
            value={form.middleName}
            onChange={handleChange}
          />
          <label htmlFor="dBirth">Date Of Birth</label>
          <input
            type="date"
            id="dBirth"
            className="signup-input"
            name="bDay"
            placeholder="birth date"
            value={form.bDay}
            onChange={handleChange}
            required
          />
          <label htmlFor="cAddress">Current Address</label>
          <input
            type="text"
            id="cAddress"
            className="signup-input"
            name="address"
            placeholder="current address"
            value={form.address}
            onChange={handleChange}
            required
          />

          <label htmlFor="eAddress">Email Address</label>
          <div className="email-address-container">
            <input
              type="text"
              id="eAddress"
              className={`signup-input ${error ? "error-border" : ""}`}
              name="email"
              placeholder="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            {error && <small className="error">{error}</small>}
          </div>

          <label htmlFor="cNumber">Contact Number</label>
          <input
            type="text"
            id="cNumber"
            className="signup-input"
            name="contact"
            placeholder="contact #"
            value={form.contact}
            onChange={handleChange}
            required
          />
          <label htmlFor="uName">User Name</label>
          <input
            type="text"
            id="uName"
            className="signup-input"
            name="userName"
            placeholder="user name"
            autoComplete="new-user-name"
            value={form.userName}
            onChange={handleChange}
            required
          />
          <label htmlFor="pWord">Password</label>
          <div className="password-container">
            <input
              type="password"
              id="pWord"
              className="signup-input"
              name="password"
              placeholder="password"
              autoComplete="new-password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <i
              className="fa-solid fa-eye toggle-password"
              data-target="pWord"
              role="button"
              tabIndex="0"
              id="eye"
            ></i>
          </div>

          <div className="submit-button-container">
            <button type="submit" id="create-button">
              Create account
            </button>
            <button type="reset" id="reset-button" onClick={resetForm}>
              Reset
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Signup;
