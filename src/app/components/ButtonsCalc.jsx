export default function Buttons() {
  const buttonClass = "bg-theme1-key-orange rounded-[10px] text-theme1-keypad-background p-4 text-5xl shadow-md hover:bg-theme1-text-white shadow-theme1-key-orange-shadow max-md:rounded-[5px] max-md:text-[2rem] cursor-pointer";

  const buttonDelClass = "bg-theme1-key-background text-theme1-text-white  rounded-2xl p-4 text-4xl flex justify-center items-center shadow-md hover:bg-blue-300 shadow-theme1-key-shadow max-md:text-[1.7rem] max-md:rounded-[5px] cursor-pointer";

  const buttonMultiClass = "bg-theme1-key-orange rounded-[10px] text-keypad-background p-4 text-4xl shadow-md hover:bg-theme1-text-white shadow-theme1-key-orange-shadow max-md:rounded-[5px] max-md:text-[2rem] cursor-pointer";

  const buttonResetClass = "bg-theme1-key-background text-white uppercase rounded-[10px] p-4 text-4xl col-span-2 flex items-center justify-center shadow-md hover:bg-blue-300 shadow-theme1-key-shadow max-md:rounded-[5px] max-md:text-[2rem] cursor-pointer";

  const buttonEqualClass = "bg-theme1-key-red hover:bg-red-400 text-white rounded-[10px] p-4 text-5xl col-span-2 shadow-md shadow-theme1-key-red-shadow max-md:rounded-[5px] max-md:text-[2rem] cursor-pointer"



  return (
    <div className="w-full bg-theme1-screen-background p-5 rounded-md my-7" >
      <div className="grid grid-cols-4 gap-4 text-center">

        <button className={`${buttonClass} max-md:text-[2rem]`}>7</button>
        <button className={buttonClass}>8</button>
        <button className={buttonClass}>9</button>
        <button className={buttonDelClass}> DEL</button>
        <button className={buttonClass}>4</button>
        <button className={buttonClass}>5</button>
        <button className={buttonClass}>6</button>
        <button className={buttonClass}>+</button>
        <button className={buttonClass}>1</button>
        <button className={buttonClass}>2</button>
        <button className={buttonClass}>3</button>
        <button className={buttonClass}>-</button>
        <button className={buttonClass}>.</button>
        <button className={buttonClass}>0</button>
        <button className={buttonClass}>/</button>
        <button className={buttonMultiClass}>X</button>
        <button className={buttonResetClass}>Reset</button>
        <button className={buttonEqualClass}> = </button>
      </div>
    </div >

  )
}