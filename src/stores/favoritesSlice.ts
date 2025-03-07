import {StateCreator} from 'zustand'
import { Recipe } from '../types'
import { createNotificationSlice } from './notificationSlice'
import { NotificationSliceType } from './notificationSlice'

export type FavoriteSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    /* favoriteExists: (id: Recipe['idDrink']) => boolean */
    loadFromStorage: () => void
}


export const createFavoriteSlice: StateCreator<FavoriteSliceType & NotificationSliceType, [], [], FavoriteSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
       if(get().favorites.some(favorite => favorite.idDrink === recipe.idDrink)){
         set((state) =>({
            favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
         }))
         createNotificationSlice(set, get, api).showNotification({
          text:'Se eliminó de Favoritos', 
          error: false})
       }else{
         set((state) => ({
            favorites: [...state.favorites, recipe]
         }))
         createNotificationSlice(set, get, api).showNotification({
          text:'Se agrego correctamente a Favoritos', 
          error: false})      
       }
       localStorage.setItem('favorites', JSON.stringify(get().favorites))
    }/* ,
    favoriteExists: (id) => {
      return get().favorites.some(favorite => favorite.idDrink === id)
    }  */
   ,
   loadFromStorage: () => {
    const storedFavorites = localStorage.getItem('favorites')
    if(storedFavorites){
      set({
        favorites: JSON.parse(storedFavorites)
      })
    }
   }
})