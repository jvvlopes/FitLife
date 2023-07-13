import { Link } from "react-router-dom"
import Dropdown from "../components/Dropdown"
import CardAtividade from "../components/CardAtividade"
import { useState, useEffect } from "react"
import AtividadeVid from "../assets/Atividade.mp4" 

export default function Atividades(){

    const [activities, setActivities] = useState()

    useEffect(() => {
        const currentActivities = JSON.parse(localStorage.getItem('activities'))
        setActivities(currentActivities)
    }, [])

    function handleRemove(i){
        const newAcc = activities.filter((acc, index) => {
            if(index != i){
                return acc
            }
        })
        setActivities(newAcc)

        localStorage.setItem('activities', JSON.stringify(newAcc))
    }

    return(
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-3">
            <Dropdown/>

            <div className="w-4/5 h-[40%] overflow-hidden rounded-lg">
                <video src={AtividadeVid} autoPlay muted loop></video>
            </div>  
            <div className="w-4/5 h-1/4 snap-x p-3 flex gap-5 overflow-auto">
                {
                    activities?.map((activitie, index) => {
                        return <CardAtividade id={index} categorie={activitie.categoria} date={activitie.data} time={activitie.tempo} plus={activitie.plus} key={index} remove={handleRemove} />
                    })
                }
            </div>
            <div className="w-4/5 h-1/4 flex gap-3">
                <Link className="h-full w-1/3 bg-orange-500 rounded-lg flex items-center justify-center text-zinc-100 text-2xl" to="/">
                    Atividades Físicas
                </Link>
                <Link className="h-full w-1/3 bg-sky-500 rounded-lg flex items-center justify-center text-zinc-100 text-2xl" to="/dieta">
                    Dieta
                </Link>
                <Link className="h-full w-1/3 bg-fuchsia-600 rounded-lg flex items-center justify-center text-zinc-100 text-2xl" to="/vida">
                    Bem-estar
                </Link>
            </div>
        </div>
    )
}