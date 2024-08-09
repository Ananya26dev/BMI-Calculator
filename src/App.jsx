import React, { useState } from "react";
import "./index.css";
function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  let calBMI = (e) => {
    e.preventDefault();
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (
      isNaN(weightNum) ||
      isNaN(heightNum) ||
      weightNum <= 0 ||
      heightNum <= 0
    ) {
      alert("Please enter valid weight and height");
      return;
    }

    const bmiValue = (weightNum / (heightNum * heightNum)) * 703;
    setBmi(bmiValue.toFixed(1));
    if (bmiValue < 18.5) {
      setMessage("You are under weight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage("You are a healthy weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage("You are over weight");
    } else {
      setMessage("You are obese");
    }
  };
  //Reload
  let reload = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setMessage("");
  };
  return (
    <div className="app">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calBMI}>
          <div>
            <label>Weight(lbs)</label>
            <input
              type="number"
              placeholder="Enter Weight Value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height(in)</label>
            <input
              type="number"
              placeholder="Enter Height Value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="btn">
              Submit
            </button>
            <button type="button" className="btn btn-outline" onClick={reload}>
              Reload
            </button>
          </div>
          <div className="center">
            {bmi > 0 && <h3>Your BMI is: {bmi}</h3>}
            <p className="message">{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
