
export default function ResultsCalc({ backgroundThemeResult, colorText, output }) {
    const outputLimited = output.toString().slice(0, 12).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return (
        <div className={`${backgroundThemeResult} rounded-md p-10 max-md:p-7`}>
            <span className={`${colorText} flex justify-end text-6xl w-full max-md:text-5xl`}>{outputLimited}</span>
        </div>
    );
}
