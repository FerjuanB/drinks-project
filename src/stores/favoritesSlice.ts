import { StateCreator } from "zustand";
import { Recipe } from "../types";


export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite:(recipe: Recipe) => void
    favExist: (id:Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoritesSlice : StateCreator <FavoritesSliceType> = (set,get) => ({
    favorites:[],
    handleClickFavorite:(recipe) => {
        if(get().favExist(recipe.idDrink)){
            set((state)=>({
                favorites:state.favorites.filter(fav => fav.idDrink !== recipe.idDrink)
            }))
        } else {
            set((state)=>({
                favorites: [...state.favorites, recipe]
            }))
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