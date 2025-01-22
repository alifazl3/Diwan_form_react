import React, {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import translations from "./translations";

import "./ExamSelection.css";

const ExamSelection = ({ onNext, onPrev }) => {
    const {t, i18n} = useTranslation("ExamSelection");
    const [translationsLoaded, setTranslationsLoaded] = useState(false);

    useEffect(() => {
        Object.keys(translations).forEach((lang) => {
            if (!i18n.hasResourceBundle(lang, "ExamSelection")) {
                i18n.addResourceBundle(lang, "ExamSelection", translations[lang], true, true);
            }
        });
        setTranslationsLoaded(true);
    }, [i18n]);


    if (!translationsLoaded) {
        return <div>Loading translations...</div>;
    }

    const handleSubmit = (e) => {
        if (e) {
            onNext({ examType:  e}, "PersonalInfo");
        }
    };

    return (
        <div className="question-box exam-selection">
            <h2>{t("title")}</h2>
            <div className="exam-options">
                <label>
                    <input
                        type="radio"
                        name="exam"
                        value="TOEFL"
                        onChange={(e) => handleSubmit(e.target.value)}
                    />
                    {t("exams.toefl")}
                </label>
                <label>
                    <input
                        type="radio"
                        name="exam"
                        value="IELTS"
                        onChange={(e) => handleSubmit(e.target.value)}
                    />
                    {t("exams.ielts")}
                </label>
                <label>
                    <input
                        type="radio"
                        name="exam"
                        value="Cambridge"
                        onChange={(e) => handleSubmit(e.target.value)}
                    />
                    {t("exams.cambridge")}
                </label>
            </div>
        </div>
    );
};

export default ExamSelection;
