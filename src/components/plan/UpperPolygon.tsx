import PlanIcon from "./planIcons";

export default function UpperPolygon({ color, planName }: { color: string, planName: string }) {
    return (
        <>
        <div className="relative">

            <svg width="254" height="254" viewBox="0 0 254 254" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-red-500">
                <path d="M22.0148 66.3867L127 5.7735L231.985 66.3867V187.613L127 248.227L22.0148 187.613V66.3867Z" fill="white" stroke="#F2994A" stroke-width="10" />
                <PlanIcon name={planName}/>
            </svg>
        </div>

            {/* <div className="w-fit h-fit">
                <svg width="220" height="254" viewBox="0 0 220 254" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative">
                <path d="M5.01477 66.3867L110 5.7735L214.985 66.3867V187.613L110 248.227L5.01477 187.613V66.3867Z" fill="white" stroke={`#${color}`} stroke-width="10" />
                <img src={planName == "essential" ? "/pricing/logo001.svg" : planName == "pro-monthly" ? "/pricing/logo002.svg" : "/pricing/logo003.svg"} alt="" className="" />
                </svg>
            </div> */}
        </>
    )
}