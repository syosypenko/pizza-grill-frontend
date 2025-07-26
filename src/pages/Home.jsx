import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🍕 Welcome to Pizza Grill</h1>
      <p style={styles.subheading}>Delicious, wood-fired pizza delivered fresh to your door.</p>
      <Link to="/menu" style={styles.button}>
        View Menu
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#fbeec1",
    textAlign: "center",
    padding: "2rem",
  },
  heading: {
    fontSize: "3rem",
    color: "#d62828",
    marginBottom: "1rem",
  },
  subheading: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "2rem",
  },
  button: {
    backgroundColor: "#d62828",
    color: "#fff",
    padding: "1rem 2rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  }
};

  