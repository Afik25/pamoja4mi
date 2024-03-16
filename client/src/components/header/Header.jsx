import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <img src={process.env.PUBLIC_URL + "/logo.png"} className="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
