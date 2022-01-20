import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        value: null
    },
    reducers: {
        searchEnter: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { searchEnter } = searchSlice.actions

export default searchSlice.reducer