import "./index.css";
import { useState } from "react";

const messages = ["Hello React", "Hello Aria", "OOO Hello Bria"];

function App() {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const handlePre = () => {
    // step > 0 ? setStep(step - 1) : setStep(step);
    step > 0 ? setStep((s) => s - 1) : setStep(step);

  };
  const handleNext = () => {
    // step < 2 ? setStep(step + 1) : setStep(step);
    step < 2 ? setStep((s)=> s+1) : setStep(step);
  };

  return (
    <div>
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
        {isOpen ? "Hide" : "Show"}
      </button>
      {isOpen && (
        <div className="wrapper">
          <div className="numberWrapper">
            <div className={step >= 0 ? "active" : ""}>1</div>
            <div className={step >= 1 ? "active" : ""}>2</div>
            <div className={step >= 2 ? "active" : ""}>3</div>
          </div>
          <p>
            {step}:{messages[step]}
          </p>
          <div className="btnGroup">
            <button onClick={() => handlePre()}>Previous</button>
            <button onClick={() => handleNext()}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
