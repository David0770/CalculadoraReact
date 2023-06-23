"use client"
import { useState } from "react"
import RootLayout from "./layout"
import HeadCalc from "./components/HeadCalc"
import ButtonsCalc from "./components/ButtonsCalc"


export default function Home() {

  const [theme, setTheme] = useState("bg-theme1-main-background");
  const [themeResult, setThemeResult] = useState("bg-theme1-screen-background");
  const [colorTextResult, setColorTextResult] = useState("text-white");
  const [themeSectionsButtons, setThemeSectionButtons] = useState("bg-theme1-screen-background");
  const [backgroundButtons, setBackgroundButtons] = useState("bg-theme1-key-orange");
  const [colorTextButtons, setColorTextButtos] = useState("text-theme1-keypad-background");
  const [colorBorderButtons, setColorBorderButtos] = useState("border-theme1-key-orange-shadow");
  const [hoverButtons, setHoverButtons] = useState("hover:bg-theme1-text-white");
  const [resetAndDeleteThemeButtons, setResetAndDeleteThemeButtons] = useState("bg-theme1-key-background");
  const [deleteHoverButtons, setDeleteHoverButtons] = useState("hover:bg-blue-300");
  const [resetAndDeleteBorder, setResetAndDeleteBorder] = useState("border-theme1-key-shadow");
  const [buttonEqualBackground, setButtonEqualBackground] = useState("bg-theme1-key-red");
  const [buttonEqualHover, setButtonEqualHover] = useState("hover:bg-red-400");
  const [buttonEqualBorder, setButtonEqualBorder] = useState("border-theme1-key-red-shadow");

  const handleThemeChange = (newTheme) => setTheme(newTheme);
  const themeChangeResult = (newTheme) => setThemeResult(newTheme);
  const colorChangeTextResult = (newTheme) => setColorTextResult(newTheme);
  const themeChangeSectionButtons = (newTheme) => setThemeSectionButtons(newTheme);
  const changeBackgroundButtons = (newTheme) => setBackgroundButtons(newTheme);
  const changeColorTextButtons = (newTheme) => setColorTextButtos(newTheme);
  const changeColorBorderButtons = (newTheme) => setColorBorderButtos(newTheme);
  const changeHoverButtons = (newTheme) => setHoverButtons(newTheme);
  const changeResetAndDeleteTheme = (newTheme) => setResetAndDeleteThemeButtons(newTheme);
  const changeResetAndDeleteHover = (newTheme) => setDeleteHoverButtons(newTheme);
  const changeResetAndeDeleteBorder = (newTheme) => setResetAndDeleteBorder(newTheme);
  const changeButtonEqualBackground = (newTheme) => setButtonEqualBackground(newTheme);
  const changeButtonEqualHover = (newTheme) => setButtonEqualHover(newTheme);
  const changeButtonEqualBorder = (newTheme) => setButtonEqualBorder(newTheme);

  return (
    <RootLayout backgroundTheme={theme}>
      <main className="w-[650px] px-10  max-md:px-5">
        <HeadCalc
          onThemeChange={handleThemeChange}
          onThemeChangeResult={themeChangeResult}
          colorTextResult={colorChangeTextResult}
          onThemeChangeSectionButtons={themeChangeSectionButtons}
          onChangeBgButtons={changeBackgroundButtons}
          onColorTextButtons={changeColorTextButtons}
          onBorderTheme={changeColorBorderButtons}
          onHoverTheme={changeHoverButtons}
          onResetAndDeleteTheme={changeResetAndDeleteTheme}
          onResetAndDeleteHover={changeResetAndDeleteHover}
          onResetAndDelteBorder={changeResetAndeDeleteBorder}
          onButtonEqualBackground={changeButtonEqualBackground}
          onButtonEqualHover={changeButtonEqualHover}
          onButtonEqualBorder={changeButtonEqualBorder}
        />
        <ButtonsCalc
          themeResult={themeResult}
          colorTextResult={colorTextResult}
          themeSectionButtons={themeSectionsButtons}
          backgroundButtons={backgroundButtons}
          colorTextButtons={colorTextButtons}
          borderTheme={colorBorderButtons}
          hoverButtons={hoverButtons}
          resetAndDeleteTheme={resetAndDeleteThemeButtons}
          resetAndDeleteHover={deleteHoverButtons}
          resetAndDeleteBorder={resetAndDeleteBorder}
          buttonEqualBackground={buttonEqualBackground}
          buttonEqualHover={buttonEqualHover}
          buttonEqualBorder={buttonEqualBorder}
        />
      </main>
    </RootLayout>

  )
}
