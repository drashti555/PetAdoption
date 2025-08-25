import React from "react";
import "./Auth.css"; // same CSS file as login

function Signup() {
  return (
    <div className="auth-container">
      {/* Left Image */}
      <div className="auth-image">
       
        
      </div>

      {/* Right Form */}
      <div className="auth-form">
        <h2>SIGN UP</h2>

        <label>Full Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Mobile Number</label>
        <input type="tel" placeholder="+91 Your valid mobile number" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <button className="otp-button">Create Account</button>

        <p>
          Already have an account? <a href="/login">LOG IN</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
