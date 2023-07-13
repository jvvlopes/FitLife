import { Link } from "react-router-dom"
import Dropdown from "../components/Dropdown"
import DietaVid from "../assets/Dieta.mp4"
import { useState, useEffect } from "react"
import CardDieta from "../components/CardDieta"

export default function Dieta(){

    const [dietas, setDietas] = useState()

    useEffect(() => {
        const currentDietas = JSON.parse(localStorage.getItem('dieta'))
        setDietas(currentDietas)
    }, [])

    function handleRemove(i){
        const newDiet = dietas.filter((diet, index) => {
            if(index != i){
                return diet
            }
        })
        setDietas(newDiet)

        localStorage.setItem('dieta', JSON.stringify(newDiet))
    }


    return(
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-3">
            <Dropdown/>

            <div className="w-4/5 h-[40%] overflow-hidden">
                <video src={DietaVid} autoPlay muted loop></video>
            </div>
            <div className="w-4/5 h-1/4">
                {
                    dietas?.map((diet, index) => {
                        return <CardDieta id={index} categorie={diet.categoria} date={diet.data} food={diet.food} plus={diet.plus} key={index} remove={handleRemove} />
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