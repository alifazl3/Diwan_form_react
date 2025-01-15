import React from "react";
// import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/logo.png" alt="لوگو" className="logo-image" />
            </div>
            <div className="title">
                <h1>موسسه زبان</h1>
            </div>
        </header>
    );
};

export default Header;
