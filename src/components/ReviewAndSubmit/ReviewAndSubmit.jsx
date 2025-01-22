import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import translations from "./translations";
import "./ReviewAndSubmit.css";

const ReviewAndSubmit = ({ formData, onPrev }) => {
    const { t, i18n } = useTranslation("ReviewAndSubmit");
    const [translationsLoaded, setTranslationsLoaded] = useState(false);

    useEffect(() => {
        Object.keys(translations).forEach((lang) => {
            if (!i18n.hasResourceBundle(lang, "ReviewAndSubmit")) {
                i18n.addResourceBundle(lang, "ReviewAndSubmit", translations[lang], true, true);
            }
        });
        setTranslationsLoaded(true);
    }, [i18n]);

    if (!translationsLoaded) {
        return <div>Loading translations...</div>;
    }

    const handleSubmit = async () => {
        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert(t("success.message"));
            } else {
                alert(t("error.message"));
            }
        } catch (error) {
            alert(t("error.network"));
        }
    };

    return (
        <div className="review-and-submit">
            <h2>{t("title")}</h2>
            <div className="review-data">
                {Object.keys(formData).length > 0 ? (
                    <table>
                        <tbody>
                        {Object.entries(formData).map(([key, value]) => (
                            <tr key={key}>
                                <td>{t(`formData.${key}`) || key}</td>
                                <td>{value}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p>{t("noData")}</p>
                )}
            </div>
            <div className="buttons">
                <button onClick={onPrev} className="btn-back">
                    {t("buttons.back")}
                </button>
                <button onClick={handleSubmit} className="btn-submit">
                    {t("buttons.submit")}
                </button>
            </div>
        </div>
    );
};

export default ReviewAndSubmit;
