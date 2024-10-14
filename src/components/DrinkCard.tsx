import type { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}


export const DrinkCard = ({drink} : DrinkCardProps) => {
  return (
    <div className="border bg-slate-200 shadow-lg">
        <div className="overflow-hidden">
            <img 
            className="hover:scale-125 transition-transform hover:rotate-2"
            src={drink.strDrinkThumb} alt={`imagen de ${drink.strDrink}`} />
            </div>
           
            <div className="p-5">
             <h2 className="text-2xl truncate font-black">
                 {drink.strDrink}
             </h2>
             <button type="button"
             className="cursor-pointer bg-orange-700 hover:bg-orange-900 text-white font-bold uppercase rounded-md mt-5 w-full p-3 text-lg">
                Ver Receta
             </button>
            </div>
    </div>
  )
}