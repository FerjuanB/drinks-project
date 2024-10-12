import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"

export const IndexPage = () => {
const drinks =   useAppStore((state)=> state.categories)
const hasDrinks = useMemo(()=>drinks.drinks.length , [drinks])
      return (
    <>
    <h1 className="text-6xl font-bold">Recetas</h1>
    {hasDrinks?(
      <>
      {
        drinks.drinks.map((drink)=>(
          <DrinkCard 
          key={drink}/>
        ))
      }
      </>
    ):(<p className="my-10 text-center text-2xl">sin resultados...</p>)}
    </> 
)}