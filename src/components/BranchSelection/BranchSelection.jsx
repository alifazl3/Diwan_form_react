import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import translations from "./translations";
import "./BranchSelection.css";

const BranchSelection = ({ onNext }) => {
    const { t, i18n } = useTranslation("BranchSelection");

    const [translationsLoaded, setTranslationsLoaded] = useState(false);

    useEffect(() => {
        Object.keys(translations).forEach((lang) => {
            if (!i18n.hasResourceBundle(lang, "BranchSelection")) {
                i18n.addResourceBundle(lang, "BranchSelection", translations[lang], true, true);
            }
        });
        setTranslationsLoaded(true);
    }, [i18n]);

    if (!translationsLoaded) {
        return <div>Loading translations...</div>;
    }

    const handleBranchSelection = (branch) => {
        onNext({ branch });
    };

    return (
        <div className="question-box branch-selection">
            <h2>{t("branch.title")}</h2>
            <div className="branch-options">
                <label>
                    <input
                        type="radio"
                        name="branch"
                        value="Marburg"
                        onChange={() => handleBranchSelection("Marburg")}
                    />
                    {t("branch.marburg")}
                </label>
                <label>
                    <input
                        type="radio"
                        name="branch"
                        value="Bonn"
                        onChange={() => handleBranchSelection("Bonn")}
                    />
                    {t("branch.bonn")}
                </label>
            </div>
        </div>
    );
};

export default BranchSelection;
