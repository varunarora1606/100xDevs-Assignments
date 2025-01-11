import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context.jsx";

const AppBar = () => {
  const { name, isLoggedIn, setIsLoggedIn, nameRef } = useContext(AuthContext);
  return (
    <header
      style={{
        height: "10vh",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 5vw",
      }}
    >
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Auth System Demo
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {isLoggedIn ? (
          <>
            <h3>Welcome, {name}!</h3>
            <button
              style={{
                fontSize: "1rem",
                padding: "2px 1vw",
                borderRadius: "10px",
                border: "0px",
                margin: "0 2vw",
              }}
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            style={{
              fontSize: "1rem",
              padding: "2px 1vw",
              borderRadius: "10px",
              border: "0px",
            }}
            onClick={() => nameRef.current.focus()}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default AppBar;
