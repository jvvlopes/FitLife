import { Plus } from "react-feather"
import { useNavigate } from "react-router-dom"

export default function Dropdown(){

    const navigate = useNavigate()

    return(
        <div className="absolute bottom-6 right-8 flex flex-col items-center gap-5 group">
            <div className="relative flex flex-col items-center w-fit h-fit">
                <span className="flex flex-col gap-3 opacity-0 absolute bottom-[-100px] group-hover:bottom-0 group-hover:opacity-100 transition-all">
                    <div className="h-12 w-12 bg-fuchsia-500 rounded-full flex items-center justify-center" onClick={() => navigate("/addvida")}> ❤️ </div>
                    <div className="h-12 w-12 bg-sky-500 rounded-full flex items-center justify-center" onClick={() => navigate("/adddieta")}> 🥝 </div>
                    <div className="h-12 w-12 bg-orange-500 rounded-full flex items-center justify-center" onClick={() => navigate("/addatividades")}> 💪 </div>
                </span>
            </div>
            <div className="h-14 w-14 bg-zinc-300 rounded-full flex items-center justify-center relative">
                <Plus className="group-hover:rotate-45 group-hover:text-red-600 text-zinc-800 transition-all"/>
            </div>
        </div>
    )
}