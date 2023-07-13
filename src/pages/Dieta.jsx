import { Link } from "react-router-dom"
import Dropdown from "../components/Dropdown"

export default function Dieta(){
    return(
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-3">
            <Dropdown/>

            <div className="w-4/5 h-[40%] bg-zinc-400"></div>
            <div className="w-4/5 h-1/4 bg-zinc-400"></div>
            <div className="w-4/5 h-1/4 flex gap-3">
                <Link className="h-full w-1/3 bg-orange-500 rounded-lg" to="/"></Link>
                <Link className="h-full w-1/3 bg-sky-500 rounded-lg" to="/dieta"></Link>
                <Link className="h-full w-1/3 bg-fuchsia-600 rounded-lg" to="/vida"></Link>
            </div>
        </div>
    )
}