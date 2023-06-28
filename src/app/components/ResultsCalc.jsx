
export default function ResultsCalc({ backgroundThemeResult, colorText, output }) {
    const formattedOutput = output ? output.toString().slice(0, 10).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0;

    return (
        <div className={`${backgroundThemeResult} rounded-md p-10 max-md:p-6`}>
            <span className={`${colorText} flex justify-end text-6xl w-full max-md:text-5xl`}>{formattedOutput}</span>
        </div>
    );
}
