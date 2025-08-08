import React, { useState, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    const res = await fetch("http://localhost:8000/token", {
      method: "POST",
      body: formData,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    if (res.ok) {
      const data = await res.json();
      login(data.access_token);

      // Set flash message in sessionStorage
      sessionStorage.setItem("flashMessage", "Logged in successfully!");

      // Redirect to home page
      navigate("/menu");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
  <div className={styles.container}>
    <nav className={styles.nav}>
      <Link className={styles.navLink} to="/">Home</Link>
      <Link className={styles.navLink} to="/menu">Menu</Link>
      <Link className={styles.navLink} to="/contact">Contact</Link>
    </nav>

    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>🔐 Login</h2>
      <input
        className={styles.input}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        className={styles.input}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit" className={styles.button}>
        Log In
      </button>

      <p className={styles.registerText}>
        Don’t have an account?{" "}
        <Link to="/register" className={styles.registerLink}>Register here</Link>
      </p>
    </form>
  </div>
);
}
