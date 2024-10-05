import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import { Categories } from "../types"



export type recipeSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
}
//de esta manera se crea un slice y luego hay que pasarlo al principal, es la base, se van creando todos los necesarios. 

export const createRecipeSlice : StateCreator<recipeSliceType>= ()=>({
categories:{
    drinks:[]
},
fetchCategories: async (set)=>{
   const categories =  await getCategories()
   set({
    categories
   })
}

})