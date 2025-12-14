import { useState } from "react";
import "./App.css";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function App() {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(null);
  const [emailTouched, setEmailTouched] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(null);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(null);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  function validateEmail(e) {
    const value = e.target.value;
    setEmail(value);

    if (value === "") {
      setEmailErr(null);
      return;
    }

    if (emailRegex.test(value)) {
      setEmailErr(null);
    } else {
      setEmailErr(true);
    }
  }

  function validatePass(e) {
    const value = e.target.value;
    setPassword(value);

    if (value === "") {
      setPasswordErr(null);
      return;
    }

    if (value.length >= 8) {
      setPasswordErr(null);
    } else {
      setPasswordErr(true);
    }
    if (confirmPassword !== "") {
      setConfirmPasswordErr(confirmPassword !== value);
    }
  }

  function validateConfirmPass(e) {
    const value = e.target.value;
    setConfirmPassword(value);

    if (value === "") {
      setConfirmPasswordErr(null);
      return;
    }

    if (value === password) {
      setConfirmPasswordErr(null);
    } else {
      setConfirmPasswordErr(true);
    }
  }

  function reset() {
    setEmail("");
    setEmailErr(null);
    setEmailTouched(false);
    setPassword("");
    setPasswordErr(null);
    setPasswordTouched(false);
    setConfirmPassword("");
    setConfirmPasswordErr(null);
    setConfirmPasswordTouched(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!passwordErr && !emailErr && !confirmPasswordErr) {
      alert("Form submitted successfully!");
      reset();
    } else {
      alert("Form cannot be submitted!");
    }
  }

  return (
    <div id="app">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={validateEmail}
          onBlur={() => setEmailTouched(true)}
          className={
            emailTouched && email !== ""
              ? emailErr
                ? "input-error"
                : "input-success"
              : ""
          }
        />
        <p
          id="emailerr"
          style={{
            color: "red",
            display: emailTouched && emailErr ? "block" : "none",
          }}
        >
          Invalid Email Address
        </p>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={validatePass}
          onBlur={() => setPasswordTouched(true)}
          className={
            passwordTouched && password !== ""
              ? passwordErr
                ? "input-error"
                : "input-success"
              : ""
          }
        />
        <p
          id="passworderr"
          style={{
            color: "red",
            display: passwordTouched && passwordErr ? "block" : "none",
          }}
        >
          Password must be atleast 8 characters
        </p>

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={validateConfirmPass}
          onBlur={() => setConfirmPasswordTouched(true)}
          className={
            confirmPasswordTouched && confirmPassword !== ""
              ? confirmPasswordErr
                ? "input-error"
                : "input-success"
              : ""
          }
        />
        <p
          id="confirmPassworderr"
          style={{
            color: "red",
            display:
              confirmPasswordTouched && confirmPasswordErr ? "block" : "none",
          }}
        >
          Passwords do not match
        </p>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default App;
