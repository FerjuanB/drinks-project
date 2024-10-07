import {z} from 'zod'
import { CategoriesAPIResponseSchema, DrinksAPIResponse, SearchFilterSchema } from '../utils/RecipeSchema'



export type Categories = z.infer<typeof CategoriesAPIResponseSchema>

export type RecipeSearch = z.infer <typeof SearchFilterSchema>

export type Drinks = z.infer <typeof DrinksAPIResponse>