import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useAppStore } from "../stores/useAppStore"

export const SearchForm = () => {
const fetchCategories = useAppStore((state)=>state.fetchCategories)
const {drinks} = useAppStore((state)=>state.categories)
const recipe = useAppStore((state)=>state.searchRecipe)
const showNotification = useAppStore((state)=>state.showNotification)

const [searchFilter,setSearchFilter]=useState({
  ingredient:'',
  category:''

})
  useEffect(()=>{
    fetchCategories()
  },[])


  const handleChange = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>{
setSearchFilter({
  ...searchFilter,
  [e.target.name]:e.target.value
})
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    if(Object.values(searchFilter).includes('')){
      showNotification({
        text:"Todos los campos son obligatorios",
        error:true
      })
      return
    }
    recipe(searchFilter)
  }
  return (
    <form 
    className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
    onSubmit={handleSubmit}
    >
        <div className="space-y-4">
            <label 
            className="block text-white uppercase font-bold text-lg"
            htmlFor="ingredient">Nombre o Ingredientes</label>
            <input 
            id="ingredient"
            type="text" 
            name="ingredient"
            className="p-3 w-full rounded-lg focus:outline-none"
            placeholder="Nombre de la bebida, o ingrediente"
            onChange={handleChange}
            value={searchFilter.ingredient}
            />
        </div>    
        <div className="space-y-4">
            <label 
            className="block text-white uppercase font-bold text-lg"
            htmlFor="category">Categoria</label>
            <select 
            id="category" 
            name="category"
            className="p-3 w-full rounded-lg focus:outline-none"
            onChange={handleChange}
            value={searchFilter.category}
            >
            <option value=""> Elegí uno</option>    
            {drinks.map(category =>(
              <option value={category.strCategory} key={category.strCategory}>{category.strCategory}</option>
            ))}
            </select>
        </div>    
        <input type="submit" value="Buscar" 
        className="cursor-pointer bg-orange-700 hover:bg-orange-900 text-white font-bold uppercase rounded-md w-full p-2"  />
    </form>
  )
}