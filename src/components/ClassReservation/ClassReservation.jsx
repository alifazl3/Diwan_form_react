import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import translations from "./translations";
import "./ClassReservation.css";

const ClassReservation = ({onNext}) => {
    const {t, i18n} = useTranslation("ClassReservation");
    const [translationsLoaded, setTranslationsLoaded] = useState(false);
    const [selectedClass, setSelectedClass] = useState("");

    useEffect(() => {
        Object.keys(translations).forEach((lang) => {
            if (!i18n.hasResourceBundle(lang, "ClassReservation")) {
                i18n.addResourceBundle(lang, "ClassReservation", translations[lang], true, true);
            }
        });
        setTranslationsLoaded(true);
    }, [i18n]);

    if (!translationsLoaded) {
        return <div>Loading translations...</div>;
    }

    const handleSubmit = (e) => {
        if (e){
            onNext({ registrationType:  e}, "PersonalInfo");
        }
    };

    return (
        <div className="question-box class-reservation">
            <h2>{t("title")}</h2>
            <div className="class-options">
                <label>
                    <input
                        type="radio"
                        name="class"
                        value="Beginner"
                        onChange={(e) => handleSubmit(e.target.value)}
                    />
                    {t("classes.beginner")}
                </label>
                <label>
                    <input
                        type="radio"
                        name="class"
                        value="Intermediate"
                        onChange={(e) => handleSubmit(e.target.value)}
                    />
                    {t("classes.intermediate")}
                </label>
                <label>
                    <input
                        type="radio"
                        name="class"
                        value="Advanced"
                        onChange={(e) => setSelectedClass(e.target.value)}
                    />
                    {t("classes.advanced")}
                </label>
            </div>
        </div>
    );
};

export default ClassReservation;
