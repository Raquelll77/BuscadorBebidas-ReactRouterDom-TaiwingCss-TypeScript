import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from './recipeSlice'
import { createFavoriteSlice, FavoriteSliceType } from './favoritesSlice'
import { NotificationSliceType, createNotificationSlice } from './notificationSlice'
import { AISlice, createAISlice } from './iaSlice'

export const useAppStore = create<RecipesSliceType &FavoriteSliceType &NotificationSliceType &AISlice>()(devtools((...a)=>({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a),
})))


//slicee parents