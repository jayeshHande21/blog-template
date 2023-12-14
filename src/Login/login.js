import { useContext } from "react";
import { blogContext } from "../context/blogContext";
import React, { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const { loggedIn, setLoggedIn, handleLogin } = useContext(blogContext);

  return (
    <div className="login-container">
      <h2 style={{ color: "blue" }}>Login</h2>
      <label>Username:</label>
      <input
        placeholder="Enter your username"
        type="text"
        id="username"
        required
      />
      <label>Email:</label>
      <input
        placeholder="Enter your email Id Here"
        type="email"
        id="email"
        required
      />
      <label>Password:</label>
      <input
        placeholder="Enter your password Here"
        type="password"
        id="password"
        required
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
