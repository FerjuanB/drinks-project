import { StateCreator } from "zustand"
import { getCategories, getRecipe, getRecipeById } from "../services/RecipeService"
import { Categories, Drink, Drinks, RecipeSearch } from "../types"



export type recipeSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipe: (searchFilter: RecipeSearch) => Promise<void>
    selectRecipe: (id : Drink['idDrink']) => Promise<void>
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
    },
    selectRecipe: async (id)=>{
        const recipe = await getRecipeById(id)
    }

})