import {z} from 'zod'
import { CategoriesAPIResponseSchema } from '../utils/RecipeSchema'



export type Categories = z.infer<typeof CategoriesAPIResponseSchema>