import { useNavigate } from "react-router-dom"

export default function AddDieta(){

    const navigate = useNavigate()

    function handleAddDieta(e){
        const diet = (localStorage.getItem('dieta') ? JSON.parse(localStorage.getItem('dieta')) : [])

        diet.push(
            {
                "categoria": e.target.categorie.value,
                "data": e.target.date.value,
                "food": e.target.food.value,
                "plus": e.target.plus.value
            }
        )

        localStorage.setItem('dieta', JSON.stringify(diet))

        navigate("/dieta")
    }

    return(
        <div className="h-screen w-screen flex items-center justify-center">
            <form className="flex gap-5 relative" onSubmit={(e) => {e.preventDefault(), handleAddDieta(e)}}>
                <h1 className="absolute bottom-[15rem] text-center w-full whitespace-nowrap h-14 rounded-lg text-zinc-100 text-6xl font-medium">Adicionar Refeição</h1>
                <span className="flex flex-col gap-5">
                    <input id="food" placeholder="Refeição" type="text" className="w-64 h-14 rounded-lg p-3 text-zinc-600" required/>
                    <select id="categorie" className="w-64 h-14 rounded-lg p-3 text-zinc-600" required>
                        <option hidden>Categoria</option>
                        <option value="Proteina">Proteina</option>
                        <option value="Carboidrato">Carboidrato</option>
                        <option value="Outros">Outros</option>
                    </select>
                    <input id="date" type="date" className="w-64 h-14 rounded-lg p-3 text-zinc-600" required/>
                </span>
                <textarea id="plus" placeholder="Anotações" className="resize-none w-64 rounded-lg p-3"></textarea>
                <button className=" absolute bottom-[-5rem] w-full h-14 rounded-lg text-zinc-100 text-xl font-medium border-orange-500 border-2 hover:bg-orange-500 bg-transparent transition-all">Salvar Refeição</button>
            </form>
        </div>
    )
}