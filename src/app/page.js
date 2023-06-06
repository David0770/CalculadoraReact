
import HeadCalc from "./components/HeadCalc"
import ResultsCalc from "./components/ResultsCalc"
import ButtonsCalc from "./components/ButtonsCalc"

export default function Home() {
  return (
    <main className="w-[650px] px-10  max-md:px-5">
      <HeadCalc />
      <ResultsCalc />
      <ButtonsCalc />

    </main>
  )
}
