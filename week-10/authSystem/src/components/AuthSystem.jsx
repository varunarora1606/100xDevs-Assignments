import React, {useRef, useState } from "react";
import AppBar from "./AppBar.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import { AuthContext } from "../context/auth.context.jsx";

const AuthSystem = () => {
  const [isContextApiOn, setIsContextApiOn] = useState(false);
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const nameRef = useRef();

  const context = isContextApiOn ? {name, setName, isLoggedIn, setIsLoggedIn, nameRef} : undefined;

  return (
    <>
      <AuthContext.Provider value={context}>
        <AppBar
          name={name}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          nameRef={nameRef}
        />

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'end', padding: "2vw 6vw"}}>
          <input
            style={{marginRight: "0.5vw"}}
            type="checkbox"
            onClick={() => setIsContextApiOn(!isContextApiOn)}
          />
          Use ContextAPI : {isContextApiOn ? "On" : "Off"}
        </div>
        {isLoggedIn ? (
          <Home />
        ) : (
          <Login
            nameRef={nameRef}
            setName={setName}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
      </AuthContext.Provider>
    </>
  );
};

export default AuthSystem;
