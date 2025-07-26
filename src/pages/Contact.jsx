import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <Link style={styles.navLink} to="/">Home</Link>
        <Link style={styles.navLink} to="/menu">Menu</Link>
        <Link style={styles.navLink} to="/contact">Contact</Link>
        <Link style={styles.navLink} to="/admin">Admin</Link>
      </nav>

      <h1 style={styles.title}>📞 Contact Us</h1>
      <form style={styles.form}>
        <label style={styles.label}>Your Name:</label>
        <input type="text" placeholder="Your name" style={styles.input} />

        <label style={styles.label}>Your Email:</label>
        <input type="email" placeholder="Your email" style={styles.input} />

        <label style={styles.label}>Message:</label>
        <textarea placeholder="Message" style={styles.textarea} />

        <button type="submit" style={styles.button}>Send</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff9f4",
    minHeight: "100vh",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    marginBottom: "2rem",
  },
  navLink: {
    textDecoration: "none",
    color: "#c0392b",
    fontWeight: "bold",
    fontSize: "1.1rem",
  },
  title: {
    textAlign: "center",
    color: "#d35400",
    fontSize: "2rem",
    marginBottom: "1.5rem",
  },
  form: {
    maxWidth: "500px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  label: {
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    padding: "0.5rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  textarea: {
    padding: "0.5rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    minHeight: "100px",
  },
  button: {
    padding: "0.75rem",
    backgroundColor: "#e67e22",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
