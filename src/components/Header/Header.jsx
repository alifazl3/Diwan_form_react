import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

const Header = () => {
    const { t, i18n } = useTranslation("Header");

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <header className="header">
            <div className="header-logo">
                <img src="https://diwan-marburg.de/wp-content/uploads/2023/05/logo_dark.png" alt="Logo" />
            </div>
            <div className="header-title">
                <h1>Diwan-Marburg Akademi</h1>
            </div>
            <div className="header-lang">
                <select
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    defaultValue={i18n.language}
                >
                    <option value="en">English</option>
                    <option value="fa">فارسی</option>
                    <option value="de">Deutsch</option>
                </select>
            </div>
        </header>
    );
};

export default Header;
