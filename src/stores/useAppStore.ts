import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from './recipeSlice'
import { createFavoriteSlice, FavoriteSliceType } from './favoritesSlice'
import { NotificationSliceType, createNotificationSlice } from './notificationSlice'

export const useAppStore = create<RecipesSliceType &FavoriteSliceType &NotificationSliceType>()(devtools((...a)=>({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a)
})))


//slicee parents