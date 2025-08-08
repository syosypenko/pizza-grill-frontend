import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const { token, logout, username } = useContext(AuthContext);
  const [flashMessage, setFlashMessage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/menu")
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch((err) => console.error("Failed to load menu:", err));
  }, []);
  
  const handleLogout = () => {
    logout();
    setFlashMessage("You have been logged out successfully.");

    setTimeout(() => {
      setFlashMessage(null);
    }, 3000);
  };

  return (
    <div style={styles.container}>
      {flashMessage && (
        <div style={styles.flashMessage}>{flashMessage}</div>
      )}

      <nav style={styles.nav}>
        <Link style={styles.navLink} to="/">Home</Link>
        <Link style={styles.navLink} to="/menu">Menu</Link>
        <Link style={styles.navLink} to="/contact">Contact</Link>
        <Link style={styles.navLink} to="/admin">Admin</Link>

        {!token ? (
          <>
            <Link style={styles.navLink} to="/login">Login</Link>
            <Link style={styles.navLink} to="/register">Register</Link>
          </>
        ) : (
          <div style={styles.userSection}>
            <span style={styles.username}>Hi, {username}</span>
            <button style={styles.logoutBtn} onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
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
  flashMessage: {
    backgroundColor: "#dff0d8",
    color: "#3c763d",
    borderRadius: "5px",
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    marginBottom: "2rem",
    flexWrap: "wrap",
    alignItems: "center",
  },
  navLink: {
    textDecoration: "none",
    color: "#c0392b",
    fontWeight: "bold",
    fontSize: "1.1rem",
  },
  userSection: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginLeft: "1rem",
  },
  username: {
    fontWeight: "bold",
    color: "#34495e",
    fontSize: "1rem",
  },
  logoutBtn: {
    backgroundColor: "#34495e",
    color: "#ecf0f1",
    border: "none",
    padding: "0.4rem 0.9rem",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "0.95rem",
    transition: "background-color 0.3s ease",
  },
  logoutBtnHover: {
    backgroundColor: "#2c3e50",
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
