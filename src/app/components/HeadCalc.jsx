'use client'
import { useState } from "react"

export default function HeadCalc({ onThemeChange, onThemeChangeResult, colorTextResult,
    onThemeChangeSectionButtons, onChangeBgButtons, onColorTextButtons, onBorderTheme, onHoverTheme, onResetAndDeleteTheme,
    onResetAndDeleteHover, onResetAndDelteBorder, onButtonEqualBackground, onButtonEqualHover, onButtonEqualBorder }) {

    const [hiddenOne, setHiddenOne] = useState("flex");
    const [hiddenTwo, setHiddenTwo] = useState("hidden");
    const [hiddenThree, setHiddenThree] = useState("hidden");
    const [bgToggle, setBgToggle] = useState("bg-theme1-toggle-background");
    const [textTheme, setTextTheme] = useState("text-white");

    const changeClassHidden = () => {
        setHiddenOne("flex");
        setHiddenTwo("hidden");
        setHiddenThree("hidden");

        setBgToggle("bg-theme1-toggle-background");
        onThemeChange("bg-theme1-main-background");
        setTextTheme("text-white");

        onThemeChangeResult("bg-theme1-screen-background");
        colorTextResult("text-white");

        onThemeChangeSectionButtons("bg-theme1-keypad-background");
        onChangeBgButtons("bg-theme1-key-orange");
        onColorTextButtons("text-theme1-keypad-background");

        onBorderTheme("border-theme1-key-orange-shadow");
        onHoverTheme("hover:bg-theme1-text-white");

        onResetAndDeleteTheme("bg-theme1-key-background");
        onResetAndDeleteHover("hover:bg-blue-300");
        onResetAndDelteBorder("border-theme1-key-shadow");

        onButtonEqualBackground("bg-theme1-key-red");
        onButtonEqualHover("hover:bg-red-400");
        onButtonEqualBorder("border-theme1-key-red-shadow");
    }


    const changeClassHiddenTwo = () => {
        setHiddenOne("hidden");
        setHiddenTwo("flex");
        setHiddenThree("hidden");

        setBgToggle("bg-theme2-toggle-background");
        onThemeChange("bg-theme2-main-background");

        setTextTheme("text-theme2-text-very-dark-grayish-yellow");
        onThemeChangeResult("bg-theme2-screen-background");
        colorTextResult("text-theme2-text-very-dark-grayish-yellow");

        onThemeChangeSectionButtons("bg-theme2-keypad-background");
        onChangeBgButtons("bg-theme2-key-light-grayish-yellow");
        onColorTextButtons("text-theme2-text-very-dark-grayish-yellow");

        onBorderTheme("border-theme2-key-dark-grayish-orange");
        onHoverTheme("hover:bg-theme1-text-white");

        onResetAndDeleteTheme("bg-theme2-key-shadow");
        onResetAndDeleteHover("hover:bg-blue-200");
        onResetAndDelteBorder("border-theme2-key-background");

        onButtonEqualBackground("bg-theme2-key-orange");
        onButtonEqualHover("hover:bg-orange-400");
        onButtonEqualBorder("border-theme2-key-orange-shadow");

    }

    const changeClassHiddenThree = () => {
        setHiddenOne("hidden");
        setHiddenTwo("hidden");
        setHiddenThree("flex");

        setBgToggle("bg-theme3-main-background");
        onThemeChange("bg-theme3-screen-background");

        setTextTheme("text-theme3-text-light-yellow");
        onThemeChangeResult("bg-theme3-main-background");
        colorTextResult("text-theme3-text-light-yellow");
        onThemeChangeSectionButtons("bg-theme3-main-background");

        onChangeBgButtons("bg-theme3-screen-background");
        onColorTextButtons("text-theme3-text-light-yellow");

        onBorderTheme("border-theme3-key-shadow");
        onHoverTheme("hover:bg-theme3-key-background");

        onResetAndDeleteTheme("bg-theme3-key-background");
        onResetAndDeleteHover("hover:bg-theme3-key-hover");
        onResetAndDelteBorder("border-theme3-key-border");

        onButtonEqualBackground("bg-theme3-key-cyan");
        onButtonEqualHover("hover:bg-theme3-key-cyan-shadow");
        onButtonEqualBorder("border-cyan-100");
      
    }
    return (

        <div className={`flex justify-between  mt-10 items-center ${textTheme} mb-2 max-md:pb-8`}>
            <h2>calc</h2>
            <div className="flex gap-10  ">
                <div className="flex items-center justify-center">
                    <span className="uppercase text-sm">theme</span>
                </div>
                <div className="flex flex-col  ">
                    <div className={`flex text-sm justify-around ${textTheme}`}>
                        <span className="cursor-pointer" onClick={changeClassHidden}  >1</span>
                        <span className="cursor-pointer" onClick={changeClassHiddenTwo} >2</span>
                        <span className="cursor-pointer" onClick={changeClassHiddenThree} >3</span>
                    </div>
                    <div className={`${bgToggle} w-16 h-7 rounded-full flex items-center relative  p-1 gap-1 `} title="Clique no número para alterar o tema">
                        <div className={` ${hiddenOne} w-4 h-4 rounded-full absolute left-1  bg-theme1-key-red`}></div>
                        <div className={`${hiddenTwo} w-4 h-4 rounded-full  bg-theme2-key-orange  mx-auto`}></div>
                        <div className={`${hiddenThree} w-4 h-4 rounded-full absolute right-1 bg-theme3-key-cyan `} ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}