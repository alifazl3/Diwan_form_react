import React, { useState } from "react";

const PersonalInfo = ({ onNext, onPrev }) => {
    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        age: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({ ...personalInfo, [name]: value });
    };

    const handleSubmit = () => {
        if (personalInfo.name && personalInfo.age && personalInfo.email && personalInfo.phone) {
            onNext(personalInfo);
        } else {
            alert("لطفاً همه اطلاعات را پر کنید");
        }
    };

    return (
        <div>
            <h2>اطلاعات شخصی</h2>
            <label>
                نام:
                <input type="text" name="name" value={personalInfo.name} onChange={handleChange} />
            </label>
            <label>
                سن:
                <input type="number" name="age" value={personalInfo.age} onChange={handleChange} />
            </label>
            <label>
                ایمیل:
                <input type="email" name="email" value={personalInfo.email} onChange={handleChange} />
            </label>
            <label>
                تلفن:
                <input type="tel" name="phone" value={personalInfo.phone} onChange={handleChange} />
            </label>
            <div>
                <button onClick={onPrev}>قبلی</button>
                <button onClick={handleSubmit}>بعدی</button>
            </div>
        </div>
    );
};

export default PersonalInfo;
