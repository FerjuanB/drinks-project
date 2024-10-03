import { useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { SearchForm } from "./SearchForm"

export const Header = () => {

    const {pathname} = useLocation()

    const isHome = useMemo(()=> pathname === "/" ,[pathname])
  return (
<header className="bg-header">
<div className="mx-auto container px-5 py-16 ">
    <div className="flex justify-between items-center">
        <div>
            <img src="/logo.svg" className="w-32" alt="logo de Drinks" />
        </div>
        <nav className="flex gap-4">
            <NavLink to="/"
            className={({isActive})=> isActive? "text-orange-500 uppercase font-bold":"text-white uppercase font-bold"}
            > 
            Inicio </NavLink>
            <NavLink to="/favoritos"
            className={({isActive})=> isActive? "text-orange-500 uppercase font-bold":"text-white uppercase font-bold"}
            >Favoritos</NavLink>
        </nav>
    </div>
    {isHome && (
        <SearchForm/>
    )}
</div>
</header>  )
}