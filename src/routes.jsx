import { Routes, Route } from "react-router-dom"
import Vida from "./pages/Vida"
import Dieta from "./pages/dieta"
import Atividades from "./pages/Atividades"
import AddAtividades from "./pages/AddAtividades"
import AddDieta from "./pages/AddDieta"
import AddVida from "./pages/AddVida"

export default function MyRoutes(){
    return(
        <Routes>
            <Route path="/vida" element={<Vida/>} />
            <Route path="/dieta" element={<Dieta/>} />
            <Route path="/" element={<Atividades/>} />
            <Route path="/addatividades" element={<AddAtividades/>} />
            <Route path="/adddieta" element={<AddDieta/>} />
            <Route path="/addvida" element={<AddVida/>} />
        </Routes>
    )
}