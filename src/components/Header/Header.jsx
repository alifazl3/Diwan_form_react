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
                <img src="/logo.png" alt="Logo" />
            </div>
            <div className="header-title">
                <h1>{t("welcome")}</h1>
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
