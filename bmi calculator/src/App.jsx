import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI=()=>{
    const validHeight=parseFloat(height);
    const validWeight=parseFloat(weight);

    if(!isNaN(validHeight) && !isNaN(validWeight) && validHeight > 0 && validWeight > 0)
      {
        const bmiValue=(validWeight)/(validHeight*validHeight);
        setBmi(bmiValue.toPrecision(2))
      }
  }


  return (
    <>
      <div className=" w-full h-screen bg-blue-950 flex  items-center justify-center ">
        <div className="  w-1/2  bg-gray-400 rounded-lg flex  flex-col items-center  ">
          <h1 className=" text-black  text-3xl p-4 font-semibold ">
            BMI Calculator
          </h1>
          <Input
            name=" Weight (in kg) "
            value={weight}
            changeHandler={(e) => setWeight(e.target.value)}
          />
          <Input
            name=" Height (in m) "
            value={height}
            changeHandler={(e) => setHeight(e.target.value)}
          />
          <button className=" p-3 mt-4 mb-8 bg-blue-500 rounded-xl" onClick={calculateBMI} >Calculate BMI</button>
          {
            bmi!=null ? (<div className=" w-1/3 bg-white p-4 rounded-2xl mb-6 text-2xl font-bold text-center">
              Your BMI is :{bmi}
            </div>):null
          }
        </div>
      </div>
    </>
  );
}

export default App;
