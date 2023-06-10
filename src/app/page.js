"use client"
import { useState } from "react"
import RootLayout from "./layout"
import HeadCalc from "./components/HeadCalc"
import ResultsCalc from "./components/ResultsCalc"
import ButtonsCalc from "./components/ButtonsCalc"


export default function Home() {

  const [theme, setTheme] = useState("bg-theme1-main-background");

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };


  return (
    <RootLayout backgroundTheme={theme}>
      <main className="w-[650px] px-10  max-md:px-5">
        <HeadCalc onThemeChange={handleThemeChange} />
        <ResultsCalc />
        <ButtonsCalc />
      </main>
    </RootLayout>



  )
}
