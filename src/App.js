import React, {useState} from "react";
import Header from "./components/Header/Header";
import BranchSelection from "./components/BranchSelection/BranchSelection";
import RegistrationType from "./components/RegistrationType/RegistrationType";
import ClassReservation from "./components/ClassReservation/ClassReservation";
import ExamSelection from "./components/ExamSelection/ExamSelection";
import "./App.css";

const App = () => {
    const [step, setStep] = useState("BranchSelection");
    const [formData, setFormData] = useState({
        branch: "",
        registrationType: "",
    });


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
                {step === "ClassReservation" && <ClassReservation/>}
                {step === "ExamSelection" && <ExamSelection/>}
            </main>
        </div>
    );
};

export default App;
