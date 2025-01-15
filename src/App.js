import React from "react";
import Header from "./components/Header";
import BranchSelection from "./components/BranchSelection";
import RegistrationType from "./components/RegistrationType";
import PersonalInfo from "./components/PersonalInfo";
import ReviewAndSubmit from "./components/ReviewAndSubmit";
import "./App.css"

const App = () => {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    branch: "",
    registrationType: "",
    name: "",
    age: "",
    email: "",
    phone: "",
    classId: "",
    examId: "",
    examLevel: "",
    examDate: "",
  });

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
      <div>
        <Header />
        <main>
          {step === 1 && <BranchSelection onNext={handleNext} />}
          {step === 2 && <RegistrationType onNext={handleNext} onPrev={handlePrev} />}
          {step === 3 && <PersonalInfo onNext={handleNext} onPrev={handlePrev} />}
          {step === 4 && <ReviewAndSubmit formData={formData} onPrev={handlePrev} />}
        </main>
      </div>
  );
};

export default App;
