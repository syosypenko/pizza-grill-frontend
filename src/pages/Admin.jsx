import React from "react";

export default function Admin() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🔐 Admin Login</h1>
      <p style={styles.subtitle}>Restricted area – authorized personnel only</p>
      <form style={styles.form}>
        <input style={styles.input} type="text" placeholder="Username" required />
        <input style={styles.input} type="password" placeholder="Password" required />
        <button style={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "5rem auto",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#fffdf9",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
    color: "#c0392b",
  },
  subtitle: {
    color: "#888",
    marginBottom: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "0.75rem",
    fontSize: "1rem",
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

  