import { useNavigate } from "react-router-dom"

export default function AddVida(){

    const navigate = useNavigate()

    function handleAddVida(e){
        const life = (localStorage.getItem('life') ? JSON.parse(localStorage.getItem('life')) : [])

        life.push(
            {
                "categoria": e.target.categorie.value,
                "data": e.target.date.value,
                "tempo": e.target.time.value,
                "plus": e.target.plus.value
            }
        )

        localStorage.setItem('life', JSON.stringify(life))

        navigate("/")
    }

    return(
        <div className="h-screen w-screen flex items-center justify-center">
            <form className="flex gap-5 relative" onSubmit={(e) => {e.preventDefault(), handleAddVida(e)}}>
                <h1 className="absolute bottom-[15rem] text-center w-full whitespace-nowrap h-14 rounded-lg text-zinc-100 text-6xl font-medium">Adicionar Bem-Estar</h1>
                <span className="flex flex-col gap-5">
                    <select id="categorie" className="w-64 h-14 rounded-lg p-3 text-zinc-600" required>
                        <option hidden>Categoria</option>
                        <option value="Sentimento">Sentimento</option>
                        <option value="Pensamento">Pensamento</option>
                        <option value="Estresse">Estresse</option>
                        <option value="Atividades de bem-estar">Atividades de bem-estar</option>
                    </select>
                    <input id="date" type="date" className="w-64 h-14 rounded-lg p-3 text-zinc-600" required/>
                    <input id="time" type="time" className="w-64 h-14 rounded-lg p-3 text-zinc-600" required/>
                </span>
                <textarea id="plus" placeholder="Anotações" className="resize-none w-64 rounded-lg p-3"></textarea>
                <button className=" absolute bottom-[-5rem] w-full h-14 rounded-lg text-zinc-100 text-xl font-medium border-orange-500 border-2 hover:bg-orange-500 bg-transparent transition-all">Salvar Bem-Estar</button>
            </form>
        </div>
    )
}