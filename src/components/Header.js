import React from "react";

const Header = ({ handleDarkMode }) => {
  return (
    <div className="header">
      <h1>Note App</h1>
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
