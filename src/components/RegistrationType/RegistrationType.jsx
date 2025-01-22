import React, { useState , useEffect } from "react";
import { useTranslation } from "react-i18next";
import translations from "./translations";
import "./RegistrationType.css";

const RegistrationType = ({ onNext }) => {
    const { t, i18n } = useTranslation("RegistrationType");
    const [translationsLoaded, setTranslationsLoaded] = useState(false);

    useEffect(() => {
        Object.keys(translations).forEach((lang) => {
            if (!i18n.hasResourceBundle(lang, "RegistrationType")) {
                i18n.addResourceBundle(lang, "RegistrationType", translations[lang], true, true);
            }
        });
        setTranslationsLoaded(true);
    }, [i18n]);

    if (!translationsLoaded) {
        return <div>Loading translations...</div>;
    }

    const handleTypeSelection = (type) => {
        if (type === "class") {
            onNext({ registrationType: "class" }, "ClassReservation");
        } else if (type === "exam") {
            onNext({ registrationType: "exam" }, "ExamSelection");
        }
    };


    return (
        <div className="question-box registration-type">
            <h2>{t("title")}</h2>
            <div className="registration-options">
                <label>
                    <input
                        type="radio"
                        name="registrationType"
                        value="class"
                        onChange={() => handleTypeSelection("class")}
                    />
                    {t("types.class")}
                </label>
                <label>
                    <input
                        type="radio"
                        name="registrationType"
                        value="exam"
                        onChange={() => handleTypeSelection("exam")}
                    />
                    {t("types.exam")}
                </label>
            </div>
        </div>
    );
};

export default RegistrationType;
