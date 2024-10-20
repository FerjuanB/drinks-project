import { BrowserRouter,Routes,Route } from "react-router-dom"

import { Layout } from "./layouts/Layout"

import { lazy, Suspense } from "react"

const IndexPage = lazy(()=> import('./views/IndexPage'))
const Favorites = lazy(()=> import('./views/Favorites'))


export const AppRouter = () => {
  return (
  <BrowserRouter>
    <Routes>
     <Route element={<Layout/>}>
        <Route path="/" element={
          <Suspense fallback='Cargando...'>
            <IndexPage/>
          </Suspense>
        } index/>
        <Route path="/favoritos" element={
          <Suspense fallback="Cargando...">
            <Favorites />
          </Suspense>
        }/>
     </Route>
    </Routes>
  </BrowserRouter>  
  )
}