export const SearchForm = () => {
  return (
    <form 
    className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
    >
        <div className="space-y-4">
            <label 
            className="block text-white uppercase font-extrabold text-lg"
            htmlFor="ingredient">Nombre o Ingredientes</label>
            <input 
            id="ingredient"
            type="text" 
            name="ingredient"
            className="p-3 w-full rounded-lg focus:outline-none"
            placeholder="Nombre de la bebida, o ingrediente"
            />
        </div>    
        <div className="space-y-4">
            <label 
            className="block text-white uppercase font-extrabold text-lg"
            htmlFor="ingredient">Categoria</label>
            <select 
            id="ingredient" 
            name="ingredient"
            className="p-3 w-full rounded-lg focus:outline-none"
            >
            <option value=""> Elegí uno</option>    
            </select>
        </div>    
        <input type="submit" value="Buscar" 
        className="cursor-pointer bg-orange-700 hover:bg-orange-900 text-white font-bold uppercase rounded-md w-full p-2"  />
    </form>
  )
}