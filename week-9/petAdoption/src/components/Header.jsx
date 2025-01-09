import React from "react";

const Header = ({ message }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "10%",
        backgroundColor: "#D0A585c4",
        fontSize: '2rem',
        margin: '0'
      }}
    >
      <b>{message}</b>
    </div>
  );
};

export default Header;
