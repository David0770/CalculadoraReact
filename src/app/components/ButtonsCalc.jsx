export default function Buttons({ themeSectionButtons, backgroundButtons,
  colorTextButtons, borderTheme, hoverButtons, resetAndDeleteTheme, resetAndDeleteHover, resetAndDeleteBorder, buttonEqualBackground, buttonEqualHover, buttonEqualBorder }) {

  const buttonClass = `${backgroundButtons} rounded-[10px] ${colorTextButtons} p-4 text-5xl ${hoverButtons} border-b-4 ${borderTheme}  max-md:text-[2rem] cursor-pointer `;

  const buttonDelClass = `${resetAndDeleteTheme} ${resetAndDeleteHover} text-theme1-text-white  rounded-2xl p-4 text-4xl flex justify-center items-center border-b-4 ${resetAndDeleteBorder} max-md:text-[1.7rem] max-md:rounded-[5px] cursor-pointer`;

  const buttonResetClass = `${resetAndDeleteTheme} ${resetAndDeleteHover} text-white uppercase rounded-[10px] p-4 text-4xl col-span-2 flex items-center justify-center border-b-4  ${resetAndDeleteBorder} max-md:rounded-[5px] max-md:text-[2rem] cursor-pointer`;

  const buttonEqualClass = `${buttonEqualBackground} ${buttonEqualHover} ${buttonEqualBorder} text-white rounded-[10px] p-4 text-5xl col-span-2  border-b-4 max-md:rounded-[5px] max-md:text-[2rem] cursor-pointer`;


  return (
    <div className={`w-full ${themeSectionButtons} p-5 rounded-md my-7`} >
      <div className="grid grid-cols-4 gap-4 text-center">

        <button className={`${buttonClass} max-md:text-[2rem]`}>7</button>
        <button className={buttonClass} >8</button>
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
        <button className={buttonClass}>X</button>
        <button className={buttonResetClass}>Reset</button>
        <button className={buttonEqualClass}> = </button>
      </div>
    </div >

  )
}