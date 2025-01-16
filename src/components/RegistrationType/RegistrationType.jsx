import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import translations from "./translations";
import "./RegistrationType.css";

const RegistrationType = ({ onNext, onPrev }) => {
    const { t, i18n } = useTranslation("RegistrationType");

    const [translationsLoaded, setTranslationsLoaded] = useState(false);
    const [registrationType, setRegistrationType] = useState("");

    useEffect(() => {
        Object.keys(translations).forEach((lang) => {
            if (!i18n.hasResourceBundle(lang, "RegistrationType")) {
                i18n.addResourceBundle(lang, "RegistrationType", translations[lang], true, true);
            }
        });
        setTranslationsLoaded(true); // Mark translations as loaded
    }, [i18n]);

    if (!translationsLoaded) {
        return <div>Loading translations...</div>; // Show a loader until translations are ready
    }

    const handleSubmit = () => {
        if (registrationType) {
            onNext({ registrationType });
        } else {
            alert(t("error.selectType"));
        }
    };

    return (
        <div className="registration-type">
            <h2>{t("title")}</h2>
            <div className="registration-options">
                <label>
                    <input
                        type="radio"
                        name="registrationType"
                        value="class"
                        onChange={(e) => setRegistrationType(e.target.value)}
                    />
                    {t("types.class")}
                </label>
                <label>
                    <input
                        type="radio"
                        name="registrationType"
                        value="exam"
                        onChange={(e) => setRegistrationType(e.target.value)}
                    />
                    {t("types.exam")}
                </label>
            </div>
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

export default RegistrationType;
