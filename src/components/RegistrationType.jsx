import React, { useState } from "react";

const RegistrationType = ({ onNext, onPrev }) => {
    const [registrationType, setRegistrationType] = useState("");

    const handleSubmit = () => {
        if (registrationType) {
            onNext({ registrationType });
        } else {
            alert("لطفاً نوع ثبت‌نام را انتخاب کنید");
        }
    };

    return (
        <div>
            <h2>انتخاب نوع ثبت‌نام</h2>
            <label>
                <input
                    type="radio"
                    name="registrationType"
                    value="کلاس"
                    onChange={(e) => setRegistrationType(e.target.value)}
                />
                کلاس
            </label>
            <label>
                <input
                    type="radio"
                    name="registrationType"
                    value="امتحان"
                    onChange={(e) => setRegistrationType(e.target.value)}
                />
                امتحان
            </label>
            <div>
                <button onClick={onPrev}>قبلی</button>
                <button onClick={handleSubmit}>بعدی</button>
            </div>
        </div>
    );
};

export default RegistrationType;
