import { Link, NavLink } from "react-router-dom"

export const Header = () => {
  return (
<header className="bg-slate-800">
<div className="mx-auto container px-5 py-16 ">
    <div className="flex justify-between items-center">
        <div>
            <img src="/logo.svg" className="w-32" alt="logo de Drinks" />
        </div>
        <nav className="flex gap-4">
            <NavLink to="/"
            className="text-white uppercase font-bold"
            > 
            Inicio </NavLink>
            <Link to="/favoritos"
            className="text-white uppercase font-bold"
            >Favoritos</Link>
        </nav>
    </div>
</div>
</header>  )
}