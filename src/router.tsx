import { BrowserRouter,Routes,Route } from "react-router-dom"
import { IndexPage } from "./views/IndexPage"
import { Favorites } from "./views/Favorites"
import { Layout } from "./layouts/Layout"

export const AppRouter = () => {
  return (
  <BrowserRouter>
    <Routes>
     <Route element={<Layout/>}>
        <Route path="/" element={<IndexPage/>} index/>
        <Route path="/favoritos" element={<Favorites/>}/>
     </Route>
    </Routes>
  </BrowserRouter>  
  )
}