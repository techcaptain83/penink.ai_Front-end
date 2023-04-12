import UpperPolygon from "./UpperPolygon";
import PlanIcon from "./planIcons";

export default function Plan({ color, name, price, description, features }: { color: string, name: string, price: number, description: string, features: string[] }) {
    return (

        <div className="relative bg-cover w-fit h-fit " >
            <img src={`/pricing/${name == "essential" ? "01.svg" : name == "pro-monthly" ? "02.svg" : "03.svg"}`} alt="" />

            <div className="name w-full  text-2xl text-center font-bold text-white absolute top-[33%]" >
                <h1 className="capitalize ">{ name }</h1>
                <span>${ price }</span>
            </div>
            <div className="name w-full text-sm  absolute top-[46%] msm:px-20 md:px-18 xl:px-20" >
                <p className="font-bold  mb-2 ">{ description } </p>
                <ul className="list-disc pl-4">
                 { features.map((feat, i) => ( <li key={i}>{ feat}</li>))}
                </ul>
            </div>

        </div>
    )
}