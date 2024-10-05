import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { createRecipeSlice, recipeSliceType } from "./recipeSlice";

export const useAppStore = create<recipeSliceType>()(devtools((...a)=>({ // el ...a lo que hace es tomar una copia de todos las funciones get,set y api 

    
    ...createRecipeSlice(...a)

})))