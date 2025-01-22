import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ExamSelection.css";

const ExamSelection = ({ onNext, onPrev }) => {
    const { t } = useTranslation("ExamSelection");

    const [selectedExam, setSelectedExam] = useState("");

    const handleSubmit = () => {
        if (selectedExam) {
            onNext({ selectedExam });
        } else {
            alert(t("error.selectExam"));
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
                        onChange={(e) => setSelectedExam(e.target.value)}
                    />
                    {t("exams.toefl")}
                </label>
                <label>
                    <input
                        type="radio"
                        name="exam"
                        value="IELTS"
                        onChange={(e) => setSelectedExam(e.target.value)}
                    />
                    {t("exams.ielts")}
                </label>
                <label>
                    <input
                        type="radio"
                        name="exam"
                        value="Cambridge"
                        onChange={(e) => setSelectedExam(e.target.value)}
                    />
                    {t("exams.cambridge")}
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

export default ExamSelection;
