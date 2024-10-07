import axios from "axios"
import { CategoriesAPIResponseSchema, DrinksAPIResponse } from "../utils/RecipeSchema"
import {RecipeSearch} from '../types'


export async function getCategories() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const {data} = await axios(url)
const result = CategoriesAPIResponseSchema.safeParse(data)

if(result.success){
    return result.data
}
}

export async function getRecipe(filter : RecipeSearch){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter.category}&i=${filter.ingredient}`
    const {data}= await axios(url)
    const result = DrinksAPIResponse.safeParse(data)
    if(result.success){
        return result.data
    }
}