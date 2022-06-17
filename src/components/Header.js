import React from "react";
import "../index.css";

const Header = ({ handleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes App</h1>
      <a
        href="#"
        className="save"
        onClick={() => handleDarkMode((previousdarkMode) => !previousdarkMode)}
      >
        Mode
      </a>
    </div>
  );
};
export default Header;
