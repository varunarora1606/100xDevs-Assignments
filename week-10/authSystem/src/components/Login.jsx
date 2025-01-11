import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const Login = () => {
  const { setName, setIsLoggedIn, nameRef } = useContext(AuthContext);
  return (
    <div style={{ padding: "5vw 20vw" }}>
      <h1 style={{ fontSize: "4rem", padding: "2vw 0vw" }}>Login</h1>
      <form style={{}}>
        <input
          style={{ fontSize: "2rem" }}
          type="text"
          ref={nameRef}
          placeholder="Enter your username"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button
          style={{ fontSize: "2rem", margin: "2vw 13vw" }}
          onClick={(e) => {
            e.preventDefault();
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
