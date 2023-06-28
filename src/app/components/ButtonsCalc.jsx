"use client"
import { useState } from "react";
import ResultsCalc from "./ResultsCalc";
export default function Buttons({
  themeSectionButtons,
  backgroundButtons,
  colorTextButtons,
  borderTheme,
  hoverButtons,
  resetAndDeleteTheme,
  resetAndDeleteHover,
  resetAndDeleteBorder,
  buttonEqualBackground,
  buttonEqualHover,
  buttonEqualBorder,
  themeResult,
  colorTextResult

}) {

  const buttonClass = `${backgroundButtons} rounded-[10px] ${colorTextButtons} p-4 text-5xl ${hoverButtons} border-b-4 ${borderTheme}  max-md:text-[2rem] cursor-pointer `;

  const buttonDelClass = `${resetAndDeleteTheme} ${resetAndDeleteHover} text-theme1-text-white  rounded-2xl p-4 text-4xl flex justify-center items-center border-b-4 ${resetAndDeleteBorder} max-md:text-[1.7rem] max-md:rounded-[5px] cursor-pointer`;

  const buttonResetClass = `${resetAndDeleteTheme} ${resetAndDeleteHover} text-white uppercase rounded-[10px] p-4 text-4xl col-span-2 flex items-center justify-center border-b-4  ${resetAndDeleteBorder} max-md:rounded-[5px] max-md:text-[2rem] cursor-pointer`;

  const buttonEqualClass = `${buttonEqualBackground} ${buttonEqualHover} ${buttonEqualBorder} text-white rounded-[10px] p-4 text-5xl col-span-2  border-b-4 max-md:rounded-[5px] max-md:text-[2rem] cursor-pointer`;

  const [outputValue, setOutputValue] = useState(0);
  const [oldNumber, setOldNumber] = useState(0);
  const [arithmeticOperators, setArithmeticOperators] = useState("");

  const insertValue = (event) => {
    const value = event.target.value;
    if (outputValue === 0) {
      setOutputValue(value)
    } else {
      setOutputValue(outputValue + value)
    }

  }


  const reset = () => setOutputValue(0);


  const deleteValue = () => {
    setOutputValue(oldNumber);
    setOldNumber(0);
  };

  const insertOperator = (event) => {
    const operator = event.target.value
    setArithmeticOperators(operator);
    setOutputValue(0);
    setOldNumber(outputValue);
  }


  const calculate = () => {
    let result;
    switch (arithmeticOperators) {
      case "+":
        result = parseFloat(oldNumber) + parseFloat(outputValue);
        break
      case "-":
        result = parseFloat(oldNumber) - parseFloat(outputValue);
        break
      case "x":
        result = parseFloat(oldNumber) * parseFloat(outputValue);
        break
      case "/":
        result = parseFloat(oldNumber) / parseFloat(outputValue);
        break
      default:
        break
    }
    setOutputValue(result);
    setArithmeticOperators("");
  }

  return (

    <>
      <ResultsCalc
        backgroundThemeResult={themeResult}
        colorText={colorTextResult}
        output={outputValue}
      />

      <div className={`w-full ${themeSectionButtons} p-5 rounded-md my-7`}>
        <div className="grid grid-cols-4 gap-4 text-center">
          <button className={buttonClass} value={7} onClick={insertValue}>
            7
          </button>
          <button className={buttonClass} value={8} onClick={insertValue}>
            8
          </button>
          <button className={buttonClass} value={9} onClick={insertValue}>
            9
          </button>
          <button className={buttonDelClass} value="DEL" onClick={deleteValue}>
            DEL
          </button>
          <button className={buttonClass} value={4} onClick={insertValue}>
            4
          </button>
          <button className={buttonClass} value={5} onClick={insertValue}>
            5
          </button>
          <button className={buttonClass} value={6} onClick={insertValue}>
            6
          </button>
          <button className={buttonClass} value="+" onClick={insertOperator}>
            +
          </button>
          <button className={buttonClass} value={1} onClick={insertValue}>
            1
          </button>
          <button className={buttonClass} value={2} onClick={insertValue}>
            2
          </button>
          <button className={buttonClass} value={3} onClick={insertValue}>
            3
          </button>
          <button className={buttonClass} value="-" onClick={insertOperator}>
            -
          </button>
          <button className={buttonClass} value="." onClick={insertValue}>
            .
          </button>
          <button className={buttonClass} value={0} onClick={insertValue}>
            0
          </button>
          <button className={buttonClass} value="/" onClick={insertOperator}>
            /
          </button>
          <button className={buttonClass} value="x" onClick={insertOperator}>
            x
          </button>
          <button className={buttonResetClass} value="Reset" onClick={reset}>
            Reset
          </button>
          <button className={buttonEqualClass} value="Equal" onClick={calculate}>
            =
          </button>
        </div>
      </div>


    </>


  )
}