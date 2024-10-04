import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"

type Category ={}

export type recipeSliceType = {
    categories: Category[]
    fetchCategories: () => Promise<void>
}
//de esta manera se crea un slice y luego hay que pasarlo al principal, es la base, se van creando todos los necesarios. 

export const createRecipeSlice : StateCreator<recipeSliceType>= ()=>({
categories:[],
fetchCategories: async ()=>{
    getCategories()
}

})