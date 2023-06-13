export default function ResultsCalc({ backgroundThemeResult, colorText = "text-white", result = 0 }) {
    return (
        <div className={`${backgroundThemeResult} rounded-md p-10 max-md:p-7`}>
            <span className={`${colorText} flex justify-end text-7xl  w-full max-md:text-5xl`}>{result}</span>
        </div >
    )
}