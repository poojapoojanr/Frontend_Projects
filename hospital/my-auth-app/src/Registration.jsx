import React, { useState } from "react";

const backgroundImageUrl = "https://c8.alamy.com/comp/2PK08JY/medical-hospital-logo-cross-and-pulse-design-2PK08JY.jpg";

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");

  const toggleForm = () => {
    setError("");
    setIsLogin(!isLogin);
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    if (!email || !password) {
      setError("Please fill in all login fields.");
      return;
    }
    setError("");
    alert(`Logging in with email: ${email}`);
  };
  
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = registerData;
    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all registration fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    alert(`Registering user: ${username} with email: ${email}`);
  };
  

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };
  

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(30, 30, 30, 0.5)",
    zIndex: 1,
  };

  const formWrapperStyle = {
    position: "relative",
    zIndex: 2,
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: "16px",
    width: "350px",
    maxWidth: "90vw",
    padding: "30px 25px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
    boxSizing: "border-box",
  };

  const titleStyle = {
    margin: "0 0 22px",
    fontWeight: "600",
    fontSize: "24px",
    color: "#222",
    textAlign: "center",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "7px",
    color: "#444",
    fontWeight: "500",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    marginBottom: "18px",
    borderRadius: "8px",
    border: "1.6px solid #aaa",
    fontSize: "16px",
    transition: "border-color 0.3s",
    boxSizing: "border-box",
  };

  const inputFocusStyle = {
    borderColor: "#3b82f6",
    outline: "none",
  };

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "18px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#1e40af",
  };

  const toggleTextStyle = {
    marginTop: "16px",
    fontSize: "14px",
    color: "#555",
    textAlign: "center",
    cursor: "pointer",
  };

  const toggleSpanStyle = {
    color: "#2563eb",
    fontWeight: "700",
    textDecoration: "underline",
  };

  const errorStyle = {
    color: "#b91c1c",
    marginBottom: "12px",
    textAlign: "center",
    fontWeight: "600",
  };

  // For input focus styles, we'll use React's onFocus and onBlur to update style
  // We'll define a reusable Input component for ease and better UX

  const Input = ({ label, type, name, value, onChange, placeholder, autoComplete }) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
      <div>
        <label htmlFor={name} style={labelStyle}>
          {label}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          style={isFocused ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required
        />
      </div>
    );
  };

  return (
    <div style={containerStyle} aria-live="polite">
      <div style={overlayStyle}></div>
      <div style={formWrapperStyle} role="main" aria-label={isLogin ? "Login form" : "Register form"}>
        {isLogin ? (
          <form onSubmit={handleLoginSubmit} noValidate>
            <h1 style={titleStyle}>Login</h1>
            {error && <div style={errorStyle}>{error}</div>}
            <Input
              label="Email"
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              placeholder="Enter your email"
              autoComplete="username"
            />
            <Input
              label="Password"
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              placeholder="Enter your password"
              autoComplete="current-password"
            />
            <button
              type="submit"
              style={buttonStyle}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
            >
              Log In
            </button>
            <p style={toggleTextStyle}>
              Don't have an account?{" "}
              <span onClick={toggleForm} style={toggleSpanStyle} tabIndex={0} role="button" aria-pressed={false} onKeyDown={(e) => { if(e.key==="Enter" || e.key===" ") { e.preventDefault(); toggleForm(); } }}>
                Register
              </span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit} noValidate>
            <h1 style={titleStyle}>Register</h1>
            {error && <div style={errorStyle}>{error}</div>}
            <Input
              label="Username"
              type="text"
              name="username"
              value={registerData.username}
              onChange={handleRegisterChange}
              placeholder="Choose a username"
              autoComplete="username"
            />
            <Input
              label="Email"
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleRegisterChange}
              placeholder="Enter your email"
              autoComplete="email"
            />
            <Input
              label="Password"
              type="password"
              name="password"
              value={registerData.password}
              onChange={handleRegisterChange}
              placeholder="Create a password"
              autoComplete="new-password"
            />
            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={handleRegisterChange}
              placeholder="Confirm password"
              autoComplete="new-password"
            />
            <button
              type="submit"
              style={buttonStyle}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
            >
              Register
            </button>
            <p style={toggleTextStyle}>
              Already have an account?{" "}
              <span onClick={toggleForm} style={toggleSpanStyle} tabIndex={0} role="button" aria-pressed={true} onKeyDown={(e) => { if(e.key==="Enter" || e.key===" ") { e.preventDefault(); toggleForm(); } }}>
                Login
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}