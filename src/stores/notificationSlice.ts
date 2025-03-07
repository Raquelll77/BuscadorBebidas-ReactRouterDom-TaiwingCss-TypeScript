import { FavoriteSliceType } from './favoritesSlice'
import {StateCreator} from 'zustand'

type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
    notification: Notification
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
}


export const createNotificationSlice : StateCreator<NotificationSliceType &FavoriteSliceType, [], [],NotificationSliceType> = (set) => ({

    notification: {
        text: '',
        error: false,
        show: false
    },
    showNotification: (payload) => {
        set({
            notification:{
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
    }
   
})