import { useMemo } from "react"
import { DrinkCard } from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

const Favorites = () => {

  const favorites = useAppStore((state)=>state.favorites)
  const hasFavs = useMemo(()=>favorites.length,[favorites])
  return (
    <>
    <h1 className="text-6xl font-bold text-center"> Favoritos</h1>
   {hasFavs? ( <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
    {favorites.map(drink =>(
      <DrinkCard
      key={drink.idDrink}
      drink={drink}
      />
    ))}
    </div>):(
      <p className="text-2xl text-center my-10 text-orange-600">
      No hay favoritos seleccionados...
    </p>)}
    </>
  )
}

export default Favorites