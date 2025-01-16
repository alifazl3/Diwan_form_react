import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import translations from "./translations";
import "./BranchSelection.css";

const BranchSelection = ({ onNext }) => {
    const { t, i18n } = useTranslation("BranchSelection");

    const [translationsLoaded, setTranslationsLoaded] = useState(false);
    const [branch, setBranch] = useState(""); // Moved to the top to avoid conditional call

    useEffect(() => {
        Object.keys(translations).forEach((lang) => {
            if (!i18n.hasResourceBundle(lang, "BranchSelection")) {
                i18n.addResourceBundle(lang, "BranchSelection", translations[lang], true, true);
            }
        });
        setTranslationsLoaded(true); // Ensure state is updated once translations are added
    }, [i18n]);

    if (!translationsLoaded) {
        return <div>Loading translations...</div>;
    }

    const handleSubmit = () => {
        if (branch) {
            onNext({ branch });
        } else {
            alert(t("branch.title"));
        }
    };

    return (
        <div className="branch-selection">
            <h2>{t("branch.title")}</h2>
            <div>
                <label>
                    <input
                        type="radio"
                        name="branch"
                        value="Marburg"
                        onChange={(e) => setBranch(e.target.value)}
                    />
                    {t("branch.marburg")}
                </label>
                <label>
                    <input
                        type="radio"
                        name="branch"
                        value="Bonn"
                        onChange={(e) => setBranch(e.target.value)}
                    />
                    {t("branch.bonn")}
                </label>
            </div>
            <button onClick={handleSubmit}>بعدی</button>
        </div>
    );
};

export default BranchSelection;
