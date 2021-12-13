import React from "react";



const Header = ({ handleDarkMode }) => {
    return <div className="header">
        <h1>Notebook</h1>
        <button
            onClick={() => handleDarkMode((previousdarkMode) => !previousdarkMode)}
            className="save">Mode</button>
    </div >
}
export default Header;