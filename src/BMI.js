import { useState } from "react";

export default function BMI() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    // BMI calculation formula: BMI = weight (kg) / (height (m) * height (m))
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue);
  };

  const handleClear = () => {
    setGender("");
    setAge("");
    setHeight("");
    setWeight("");
    setBMI(null);
  };

  let bmiCategory;
  if (bmi !== null) {
    if (bmi < 18.5) {
      bmiCategory = "Underweight";
    } else if (bmi < 24.9) {
      bmiCategory = "Normal weight";
    } else if (bmi < 29.9) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obesity";
    }
  }

  return (
    <>
      <center>
        <div className="frame">
          <h1>BMI CALCULATOR</h1>
          <form onSubmit={handleCalculate}>
            <span className="icon-input">
              <i className="gender-icon"></i>
              <select name="Gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option disabled value="">Select your Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </span>
            <br /><br />
            <input type="number" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} required min="1" max="120"/>
            <br /><br />
            <input type="number" placeholder="Enter your height in cm" value={height} onChange={(e) => setHeight(e.target.value)} required min="53" max="272" />
            <br /><br />
            <input type="number" placeholder="Enter your weight" value={weight} onChange={(e) => setWeight(e.target.value)} required min="1" max="700"/>
            <br /><br />
            <button className="cal" type="submit">Calculate</button>
            <button className="clr" type="button" onClick={handleClear}>Clear</button>
          </form>
	<span class="ans">
          {bmi !== null && (
            <p>
            <span class="inn">  Your BMI is: {bmi.toFixed(2)} - {bmiCategory} </span>
            </p>
          )}
	</span>
        </div>
      </center>
    </>
  );
}
