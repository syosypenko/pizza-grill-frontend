import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role }),
    });
    if (res.ok) {
      alert("Registered successfully! You can log in now.");
    } else {
      alert("Error registering");
    }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link className={styles.navLink} to="/">Home</Link>
        <Link className={styles.navLink} to="/menu">Menu</Link>
        <Link className={styles.navLink} to="/contact">Contact</Link>
        <Link className={styles.navLink} to="/login">Login</Link>
      </nav>

      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>📝 Register</h2>
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
        <select
          className={styles.input}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className={styles.button}>
          Register
        </button>

        <p className={styles.loginText}>
          Already have an account?{" "}
          <Link to="/login" className={styles.loginLink}>Log in here</Link>
        </p>
      </form>
    </div>
  );
}
