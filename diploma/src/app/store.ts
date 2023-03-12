import {configureStore} from '@reduxjs/toolkit'
import deliveryReducer from '../features/delivery/delivery-slice'

export const store = configureStore({
    reducer: {
        deliveryReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export default store 