import { Link } from "react-router-dom"
import Dropdown from "../components/Dropdown"
import VidaVid from "../assets/Vida.mp4"
import { useState, useEffect } from "react"
import CardVida from "../components/CardVida"

export default function Vida(){

    const [life, setLife] = useState()

    useEffect(() => {
        const currentLife = JSON.parse(localStorage.getItem('life'))
        setLife(currentLife)
    }, [])

    function handleRemove(i){
        const newLif = life.filter((lif, index) => {
            if(index != i){
                return lif
            }
        })
        setLife(newLif)

        localStorage.setItem('life', JSON.stringify(newLif))
    }

    return(
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-3">
            <Dropdown/>

            <div className="w-4/5 h-[40%] overflow-hidden">
                <video src={VidaVid} className="item" autoPlay muted loop></video>
            </div>
            <div className="w-4/5 h-1/4">
                {
                    life?.map((lif, index) => {
                        return <CardVida id={index} categorie={lif.categoria} date={lif.data} food={lif.food} plus={lif.plus} key={index} remove={handleRemove} />
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