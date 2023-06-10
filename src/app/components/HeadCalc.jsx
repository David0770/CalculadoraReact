'use client'
import { useState } from "react"

export default function HeadCalc({ onThemeChange }) {

    const [hiddenOne, setHiddenOne] = useState("flex");
    const [hiddenTwo, setHiddenTwo] = useState("hidden");
    const [hiddenThree, setHiddenThree] = useState("hidden");
    const [bgToggle, setBgToggle] = useState("bg-theme1-toggle-background");

    const changeClassHidden = () => {
        setHiddenOne("flex");
        setHiddenTwo("hidden");
        setHiddenThree("hidden");
        setBgToggle("bg-theme1-toggle-background");
        onThemeChange("bg-theme1-main-background")
    }


    const changeClassHiddenTwo = () => {
        setHiddenOne("hidden");
        setHiddenTwo("flex");
        setHiddenThree("hidden");
        setBgToggle("bg-theme2-toggle-background");
        onThemeChange("bg-theme2-main-background")

    }

    const changeClassHiddenThree = () => {
        setHiddenOne("hidden");
        setHiddenTwo("hidden");
        setHiddenThree("flex");
        setBgToggle("bg-theme3-toggle-background");
        onThemeChange("bg-theme3-main-background");
    }
    return (

        <div className="flex justify-between  mt-10 items-center text-white mb-2 max-md:pb-8">
            <h2>calc</h2>
            <div className="flex gap-10  ">
                <div className="flex items-center justify-center">
                    <span className="uppercase text-sm">theme</span>
                </div>
                <div className="flex flex-col  ">
                    <div className=" flex text-sm justify-around text-white">
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