import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { createRecipeSlice, recipeSliceType } from "./recipeSlice";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";

export const useAppStore = create<recipeSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a)=>({ // el ...a lo que hace es tomar una copia de todos las funciones get,set y api 
    
    
    
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)

})))