import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import translations from "./translations";
import "./PersonalInfo.css";

const PersonalInfo = ({ onNext, onPrev }) => {
    const { t, i18n } = useTranslation("PersonalInfo");

    const [translationsLoaded, setTranslationsLoaded] = useState(false); // Track if translations are loaded
    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        age: "",
        email: "",
        phone: "",
    });

    useEffect(() => {
        Object.keys(translations).forEach((lang) => {
            if (!i18n.hasResourceBundle(lang, "PersonalInfo")) {
                i18n.addResourceBundle(lang, "PersonalInfo", translations[lang], true, true);
            }
        });
        setTranslationsLoaded(true); // Mark translations as loaded
    }, [i18n]);

    if (!translationsLoaded) {
        return <div>Loading translations...</div>; // Show loader until translations are loaded
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({ ...personalInfo, [name]: value });
    };

    const handleSubmit = () => {
        const { name, age, email, phone } = personalInfo;

        if (name && age && email && phone) {
            onNext(personalInfo);
        } else {
            alert(t("error.fillAllFields"));
        }
    };

    return (
        <div className="personal-info">
            <h2>{t("title")}</h2>
            <form>
                <label>
                    {t("fields.name")}
                    <input
                        type="text"
                        name="name"
                        value={personalInfo.name}
                        onChange={handleChange}
                        placeholder={t("placeholders.name")}
                    />
                </label>
                <label>
                    {t("fields.age")}
                    <input
                        type="number"
                        name="age"
                        value={personalInfo.age}
                        onChange={handleChange}
                        placeholder={t("placeholders.age")}
                    />
                </label>
                <label>
                    {t("fields.email")}
                    <input
                        type="email"
                        name="email"
                        value={personalInfo.email}
                        onChange={handleChange}
                        placeholder={t("placeholders.email")}
                    />
                </label>
                <label>
                    {t("fields.phone")}
                    <input
                        type="tel"
                        name="phone"
                        value={personalInfo.phone}
                        onChange={handleChange}
                        placeholder={t("placeholders.phone")}
                    />
                </label>
            </form>
            <div className="buttons">
                <button onClick={onPrev} className="btn-back">
                    {t("buttons.back")}
                </button>
                <button onClick={handleSubmit} className="btn-next">
                    {t("buttons.next")}
                </button>
            </div>
        </div>
    );
};

export default PersonalInfo;
