import React, { useState } from "react";
import "./Login.css"; // You can style it similar to your screenshot

const Login = () => {
  const [mobile, setMobile] = useState("");

  const handleLogin = () => {
    if (!mobile) {
      alert("Please enter a valid mobile number");
      return;
    }
    console.log("OTP requested for:", mobile);
    // Here you can call your backend API to send OTP
  };

  return (
    <div className="login-container">
      <div className="image-section">
        <img
          src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg"
          alt="Dog"
        />
      </div>

      <div className="form-section">
        <h2>LOG IN</h2>
        <label>Mobile Number</label>
        <input
          type="text"
          placeholder="+91 Your valid mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button onClick={handleLogin} className="otp-btn">
          Get OTP
        </button>
        <p>
          Don't have an account? <a href="/signup">SIGN UP.</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
