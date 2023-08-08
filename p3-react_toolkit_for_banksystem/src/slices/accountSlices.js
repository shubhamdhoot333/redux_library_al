import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
const initialState = {
    amount: 1,
}

export const getUserAccount = createAsyncThunk(
    'account/getUser',
    async (userId, thunkAPI) => {
        const { data } = await axios.get(`http://localhost:5000/accounts/${userId}`)
        return data.amount
    }
)
export const accountSlices = createSlice({
    name: 'account', //slice name 
    initialState,  //initial state
    reducers: {   //reducer
        increment: (state) => {

            state.amount += 1
        },
        decrement: (state) => {
            state.amount -= 1
        },
        incrementByAmount: (state, action) => {
            state.amount += action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUserAccount.fulfilled, (state, action) => {
            state.amount = action.payload
        });
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlices.actions

export default accountSlices.reducer