import React, { useState } from 'react'; 
import './BMI.css'; 
// import Card from'./Card.jsx';
  
function BmiCalculator() { 
    const [heightValue, setHeightValue] = useState(''); 
    const [weightValue, setWeightValue] = useState(''); 
    const [bmiValue, setBmiValue] = useState(''); 
    const [bmiMessage, setBmiMessage] = useState(''); 
  
    const calculateBmi = () => { 
        if (heightValue && weightValue) { 
            const heightInMeters = heightValue / 100; 
            const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2); 
            setBmiValue(bmi); 
  
            let message = ''; 
            if (bmi < 18.5) { 
                message = 'Kamu Kurus'; 
            } else if (bmi >= 18.5 && bmi < 25) { 
                message = 'Kamu Normal'; 
            } else if (bmi >= 25 && bmi < 30) { 
                message = 'Kamu Gemuk'; 
            } else { 
                message = 'Kamu Obesitas'; 
            } 
            setBmiMessage(message); 
        } else { 
            setBmiValue(''); 
            setBmiMessage(''); 
        } 
    }; 
  
    return ( 
        <div className="container"> 
            <h1>Body Mess Index</h1> 
            <div className="input-container"> 
                <label htmlFor="height">Tinggi (cm):</label> 
                <input 
                    type="number"
                    id="height"
                    value={heightValue} 
                    onChange={(e) => setHeightValue(e.target.value)} 
                /> 
            </div> 
            <div className="input-container"> 
                <label htmlFor="weight">Berat (kg):</label> 
                <input 
                    type="number"
                    id="weight"
                    value={weightValue} 
                    onChange={(e) => setWeightValue(e.target.value)} 
                /> 
            </div> 
            <button className="calculate-btn" onClick={calculateBmi}> 
                Hitung
            </button> 
            {bmiValue && bmiMessage && ( 
                <div className="result"> 
                    <p> 
                        BMI Kamu: <span className="bmi-value">{bmiValue}</span> 
                    </p> 
                    <p> 
                        Hasil: <span className="bmi-message">{bmiMessage}</span> 
                    </p> 
                </div> 
            )} 
        </div> 
    ); 
} 
  
export default BmiCalculator;