import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { createRecipeSlice, recipeSliceType } from "./recipeSlice";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";
export const useAppStore = create<recipeSliceType & FavoritesSliceType>()(devtools((...a)=>({ // el ...a lo que hace es tomar una copia de todos las funciones get,set y api 
    
    
    
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a)

})))