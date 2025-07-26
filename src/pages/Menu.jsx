import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/menu")  // Or use import.meta.env.VITE_API_URL + "/menu"
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch((err) => console.error("Failed to load menu:", err));
  }, []);

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <Link style={styles.navLink} to="/">Home</Link>
        <Link style={styles.navLink} to="/menu">Menu</Link>
        <Link style={styles.navLink} to="/contact">Contact</Link>
        <Link style={styles.navLink} to="/admin">Admin</Link>
      </nav>

      <h1 style={styles.title}>🍕 Our Pizza Menu</h1>

      <div style={styles.menuGrid}>
        {menuItems.map((item, index) => (
          <div key={index} style={styles.card}>
            <h2 style={styles.itemName}>{item.name}</h2>
            <p style={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff9f4",
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
    fontSize: "2.5rem",
    textAlign: "center",
    color: "#d35400",
    marginBottom: "1.5rem",
  },
  menuGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    background: "#fff",
    padding: "1rem",
    borderRadius: "10px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  itemName: {
    fontSize: "1.3rem",
    marginBottom: "0.5rem",
  },
  description: {
    fontSize: "1rem",
    color: "#666",
  },
};
