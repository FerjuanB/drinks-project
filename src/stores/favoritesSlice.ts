import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";


export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite:(recipe: Recipe) => void
    favExist: (id:Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoritesSlice : StateCreator <FavoritesSliceType & NotificationSliceType,[],[],FavoritesSliceType> = (set,get,api) => ({
    favorites:[],
    handleClickFavorite:(recipe) => {
        if(get().favExist(recipe.idDrink)){
            set((state)=>({
                favorites:state.favorites.filter(fav => fav.idDrink !== recipe.idDrink)
            }))
            createNotificationSlice(set,get,api).showNotification({text:'Se eliminó de favoritos',error:false})
        } else {
            set((state)=>({
                favorites: [...state.favorites, recipe]
            }))
            createNotificationSlice(set,get,api).showNotification({text:'Agregado a favoritos',error:false})

        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favExist: (id)=>{
        return get().favorites.some(fav => fav.idDrink === id )
    },
    loadFromStorage: () =>{
        const storedFavs = localStorage.getItem('favorites')
        if(storedFavs){
            set({
                favorites:JSON.parse(storedFavs)
            })
        }
    }
})