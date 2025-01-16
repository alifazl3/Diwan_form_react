import React from "react";

const ReviewAndSubmit = ({ formData, onPrev }) => {
    const handleSubmit = async () => {
        const response = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("ثبت‌نام با موفقیت انجام شد!");
        } else {
            alert("خطا در ثبت‌نام!");
        }
    };

    return (
        <div>
            <h2>بازبینی اطلاعات</h2>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
            <div>
                <button onClick={onPrev}>قبلی</button>
                <button onClick={handleSubmit}>ثبت‌نام</button>
            </div>
        </div>
    );
};

export default ReviewAndSubmit;
