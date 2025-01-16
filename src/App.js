import React, {useState} from "react";
import Header    from "./components/Header/Header";
import BranchSelection from "./components/BranchSelection/BranchSelection";
import RegistrationType from "./components/RegistrationType/RegistrationType";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import "./App.css";

const App = () => {
    const [step, setStep] = useState(1); // Track current step
    const [formData, setFormData] = useState({
        branch: "",
        registrationType: "",
        name: "",
        age: "",
        email: "",
        phone: "",
    });

    const handleNext = (data) => {
        // Update form data and move to the next step
        setFormData({...formData, ...data});
        setStep((prevStep) => prevStep + 1);
    };

    const handlePrev = () => {
        // Move to the previous step
        setStep((prevStep) => prevStep - 1);
    };

    return (


        <div className="app">
            <Header/>
            <main>
                {step === 1 && <BranchSelection onNext={handleNext}/>}
                {step === 2 && <RegistrationType onNext={handleNext} onPrev={handlePrev}/>}
                {step === 3 && <PersonalInfo onNext={handleNext} onPrev={handlePrev}/>}
            </main>
        </div>

    );
};

export default App;
