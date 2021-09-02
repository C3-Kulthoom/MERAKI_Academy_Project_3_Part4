import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ token, setToken }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        border: "blue  2px  solid ",
        fontSize: "30px",
        height: "40px",
      }}
    >
      {!token ? (
        <>
          <Link to="/Register">Register </Link> <Link to="/Login">Login </Link>
        </>
      ) : (
        <>
          <Link to="/Dashboard">Dashboard </Link>
          <Link to="/Newarticle">Newarticle </Link>
        </>
      )}
    </div>
  );
};

export default Navigation;
