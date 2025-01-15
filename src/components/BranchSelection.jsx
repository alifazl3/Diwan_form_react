import React, { useState } from "react";

const BranchSelection = ({ onNext }) => {
    const [branch, setBranch] = useState("");

    const handleSubmit = () => {
        if (branch) {
            onNext({ branch });
        } else {
            alert("لطفاً یک شعبه انتخاب کنید");
        }
    };

    return (
        <div>
            <h2>انتخاب شعبه</h2>
            <label>
                <input
                    type="radio"
                    name="branch"
                    value="ماربورگ"
                    onChange={(e) => setBranch(e.target.value)}
                />
                ماربورگ
            </label>
            <label>
                <input
                    type="radio"
                    name="branch"
                    value="بن"
                    onChange={(e) => setBranch(e.target.value)}
                />
                بن
            </label>
            <button onClick={handleSubmit}>بعدی</button>
        </div>
    );
};

export default BranchSelection;
