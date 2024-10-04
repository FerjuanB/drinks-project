import { create } from "zustand";
import { createRecipeSlice, recipeSliceType } from "./recipeSlice";

export const useAppStore = create<recipeSliceType>((...a)=>({ // el ...a lo que hace es tomar una copia de todos las funciones get,set y api 

    
    ...createRecipeSlice(...a)

}))