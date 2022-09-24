import { createSlice } from '@reduxjs/toolkit'
import {initialState} from '../store/initialState';


export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

    },
})

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default userSlice.reducer