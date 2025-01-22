import React, {useState} from "react";
import Header from "./components/Header/Header";
import BranchSelection from "./components/BranchSelection/BranchSelection";
import RegistrationType from "./components/RegistrationType/RegistrationType";
import ClassReservation from "./components/ClassReservation/ClassReservation";
import ExamSelection from "./components/ExamSelection/ExamSelection";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import ReviewAndSubmit from "./components/ReviewAndSubmit/ReviewAndSubmit";

const App = () => {
    const [step, setStep] = useState("BranchSelection");
    const [formData, setFormData] = useState({});


    const defaultSteps = {
        "BranchSelection":"RegistrationType"
    };
    const handleNext = (data, destination = "" ) => {
        setFormData({...formData, ...data});
        if (destination === ""){
            destination = defaultSteps[step]
        }
        setStep(destination);
    };

    return (
        <div className="app">
            <Header/>
            <main>
                {step === "BranchSelection" && <BranchSelection onNext={handleNext}/>}
                {step === "RegistrationType" && <RegistrationType onNext={handleNext}/>}
                {step === "ClassReservation" && <ClassReservation onNext={handleNext} />}
                {step === "ExamSelection" && <ExamSelection  onNext={handleNext} />}
                {step === "PersonalInfo" && <PersonalInfo onNext={handleNext} />}
                {step === "Confirmation" && <ReviewAndSubmit formData={formData} onNext={handleNext} />}
            </main>
        </div>
    );
};

export default App;
