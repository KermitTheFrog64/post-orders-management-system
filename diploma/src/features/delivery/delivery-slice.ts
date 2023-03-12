import {createSlice} from '@reduxjs/toolkit'
import { AppState } from '../../app/store'

interface Delivery {
    id: number
    name: string
}
interface DeliveryState {
    list: Delivery[]
}
const initialState: DeliveryState = {
    list: [
        {
            id: 1,
            name: 'delivery1'
        },
        {
            id: 2,
            name: 'delivery2'
        },
        {
            id: 3,
            name: 'delivery3'
        }
    ]
}
const deliverySlice = createSlice({
    name: 'delivery',
    initialState,
    reducers: {

    }
})

export const getDeliveryList = (state: AppState) => state.deliveryReducer.list

export default deliverySlice.reducer