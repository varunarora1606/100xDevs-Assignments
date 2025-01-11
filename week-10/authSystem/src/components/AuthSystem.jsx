import React, { useContext } from "react";
import AppBar from "./AppBar.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import { AuthContext } from "../context/auth.context.jsx";

const AuthSystem = () => {
  // const [isContextApiOn, setIsContextApiOn] = useState(true);
  // const [name, setName] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const nameRef = useRef();
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
        <AppBar
        // name={name}
        // isLoggedIn={isLoggedIn}
        // setIsLoggedIn={setIsLoggedIn}
        // nameRef={nameRef}
        />

        {/* <div>
          <input
            type="checkbox"
            onClick={() => setIsContextApiOn(!isContextApiOn)}
          />
          Use ContextAPI : {isContextApiOn ? "On" : "Off"}
        </div> */}
        {isLoggedIn ? (
          <Home />
        ) : (
          <Login
          // nameRef={nameRef}
          // setName={setName}
          // setIsLoggedIn={setIsLoggedIn}
          />
        )}
    </>
  );
};

export default AuthSystem;
