import { BrowserRouter, Link } from "react-router-dom"
import MyRoutes from "./routes"

export default function App() {
  return (
    <BrowserRouter>
        <Link className="absolute top-5 left-5 flex items-center justify-center" to="/">
          <img src="https://agilitty.com.br/wp-content/uploads/2021/10/ICONEAsset-9.png" className="h-[4.5rem]"/>
        </Link>
      <MyRoutes/>
    </BrowserRouter>
  )
}