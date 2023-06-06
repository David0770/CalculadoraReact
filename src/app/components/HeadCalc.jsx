"use client"
import { useState } from "react";
export default function HeadCalc() {
    

    return (

        <div className="flex justify-between  mt-10 items-center text-white mb-2 max-md:pb-8">
            <h2>calc</h2>
            <div className="flex gap-10  ">
                <div className="flex items-center justify-center">
                    <span className="uppercase text-sm">theme</span>
                </div>
                <div className="flex flex-col  ">
                    <div className=" flex text-sm justify-around text-white">
                        <span className="cursor-pointer">1</span>
                        <span className="cursor-pointer">2</span>
                        <span className="cursor-pointer">3</span>
                    </div>
                    <div className="bg-theme1-toggle-background w-16 h-7 rounded-full flex items-center  p-1 gap-1  ">
                        <div className=" w-4 h-4 rounded-full bg-theme1-key-red cursor-pointer"></div>
                        <div className=" hidden w-4 h-4 rounded-full bg-theme2-key-orange cursor-pointer "></div>
                        <div className=" hidden w-4 h-4 rounded-full bg-theme3-key-cyan cursor-pointer  "></div>
                    </div>
                </div>
            </div>
        </div>
    )
}