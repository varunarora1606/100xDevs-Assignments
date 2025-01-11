import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const Login = ({ setName, setIsLoggedIn, nameRef }) => {

  const context = useContext(AuthContext)

  return (
    <div style={{ padding: "5vw 20vw" }}>
      <h1 style={{ fontSize: "4rem", padding: "2vw 0vw" }}>Login</h1>
      <form >
        <input
          style={{ fontSize: "2rem" }}
          type="text"
          ref={context?.nameRef ?? nameRef }
          placeholder="Enter your username"
          onChange={(e) => context?.setName(e.target.value) ?? setName(e.target.value)}
        />
        <br />
        <button
          style={{ fontSize: "2rem", margin: "2vw 13vw" }}
          onClick={(e) => {
            e.preventDefault();
            context?.setIsLoggedIn(true) ?? setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
