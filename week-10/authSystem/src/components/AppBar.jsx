import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context.jsx";

const AppBar = ({ name, isLoggedIn, setIsLoggedIn, nameRef }) => {

  const context = useContext(AuthContext)

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
        {(context?.isLoggedIn ?? isLoggedIn) ? (
          <>
            <h3>Welcome, {context?.name ?? name}!</h3>
            <button
              style={{
                fontSize: "1rem",
                padding: "2px 1vw",
                borderRadius: "10px",
                border: "0px",
                margin: "0 2vw",
              }}
              onClick={() => {
                context?.setIsLoggedIn(false) ??
                  setIsLoggedIn(false);
              }}
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
            onClick={() =>
              context?.nameRef.current.focus() ??
              nameRef.current.focus()
            }
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default AppBar;
