import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from './recipeSlice'
import { createFavoriteSlice, FavoriteSliceType } from './favoritesSlice'

export const useAppStore = create<RecipesSliceType &FavoriteSliceType>()(devtools((...a)=>({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a)
})))


//slicee parents