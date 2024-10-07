import { StateCreator } from "zustand"
import { getCategories, getRecipe } from "../services/RecipeService"
import { Categories, Drinks, RecipeSearch } from "../types"



export type recipeSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipe: (searchFilter: RecipeSearch) => Promise<void>
}
//de esta manera se crea un slice y luego hay que pasarlo al principal, es la base, se van creando todos los necesarios. 

export const createRecipeSlice : StateCreator<recipeSliceType>= (set)=>({
categories:{
    drinks:[]
},
drinks:{
    drinks:[]
},
fetchCategories: async ()=>{
   const categories =  await getCategories()
   set({
    categories
   })
},
searchRecipe: async (filter) =>{
     const drinks = await getRecipe(filter)
    set({
        drinks
    })
    }

})