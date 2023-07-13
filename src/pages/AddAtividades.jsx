import { useNavigate } from "react-router-dom"

export default function AddAtividades(){

    const navigate = useNavigate()

    function handleAddAtividade(e){
        const activities = (localStorage.getItem('activities') ? JSON.parse(localStorage.getItem('activities')) : [])

        activities.push(
            {
                "categoria": e.target.categorie.value,
                "data": e.target.date.value,
                "tempo": e.target.time.value,
                "plus": e.target.plus.value
            }
        )

        localStorage.setItem('activities', JSON.stringify(activities))

        navigate("/")
    }

    return(
        <div className="h-screen w-screen flex items-center justify-center">
            <form className="flex gap-5 relative" onSubmit={(e) => {e.preventDefault(), handleAddAtividade(e)}}>
                <h1 className="absolute bottom-[15rem] text-center w-full whitespace-nowrap h-14 rounded-lg text-zinc-100 text-6xl font-medium">Adicionar Atividade</h1>
                <span className="flex flex-col gap-5">
                    <select id="categorie" className="w-64 h-14 rounded-lg p-3 text-zinc-600" required>
                        <option hidden>Categoria</option>
                        <option value="Musculação">Musculação</option>
                        <option value="Cárdio">Cárdio</option>
                        <option value="Aeróbico">Aeróbico</option>
                    </select>
                    <input id="date" type="date" className="w-64 h-14 rounded-lg p-3 text-zinc-600" required/>
                    <input id="time" type="time" className="w-64 h-14 rounded-lg p-3 text-zinc-600" required/>
                </span>
                <textarea id="plus" placeholder="Anotações" className="resize-none w-64 rounded-lg p-3"></textarea>
                <button className=" absolute bottom-[-5rem] w-full h-14 rounded-lg text-zinc-100 text-xl font-medium border-orange-500 border-2 hover:bg-orange-500 bg-transparent transition-all">Salvar Atividade</button>
            </form>
        </div>
    )
}