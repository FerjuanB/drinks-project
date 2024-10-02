import { BrowserRouter,Routes,Route } from "react-router-dom"
import { IndexPage } from "./views/IndexPage"
import { Favorites } from "./views/Favorites"

export const AppRouter = () => {
  return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<IndexPage/>}/>
    <Route path="/favoritos" element={<Favorites/>}/>
    </Routes>
  </BrowserRouter>  
  )
}