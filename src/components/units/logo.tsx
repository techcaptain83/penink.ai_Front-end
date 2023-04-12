import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to={'/'}>
            <h1 className="w-fit text-xl text-white  font-black cursor-pointer">Penink.ai</h1>
        </Link>
    )
}