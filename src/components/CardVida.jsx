import { X } from "react-feather"

export default function CardVida({id, categorie, date, time, plus, remove}){
    
    return(
        <div className="h-full w-64 rounded-lg p-3 bg-fuchsia-600 flex flex-col gap-5 overflow-hidden flex-shrink-0 snap-center relative">
            <div className="flex w-full justify-between items-start">
                <h1>{categorie}</h1>
                <span className="flex flex-col items-end">
                    <h1>{date}</h1>
                    <h1>{time}</h1>
                </span>
            </div>
            <h1>{plus}</h1>
            <X className="absolute bottom-2 right-2" onClick={() => remove(id)}/>
        </div>
    )
}