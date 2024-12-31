import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    address: []
}

export const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        requestStart: (state) => {
            state.loading = true;
            state.error = null
        },
        createAddressSuccess: (state, action) => {
            state.loading = false;
        },
        createAddressFail: (state, action) => {
            state.loading = false;
        },
        getAllAddressSuccess: (state, action) => {
            state.loading = false;
            state.address = action.payload.data;
        },
        getAllAddressFail: (state, action) => {
            state.loading = false;
        },
        deleteAddressSuccess: (state, action) => {
            state.loading = false;
        },
        deleteAddressFail: (state, action) => {
            state.loading = false;
        },



    }

})

export const {
    requestStart,
    createAddressSuccess,
    createAddressFail,
    getAllAddressSuccess,
    getAllAddressFail,
    deleteAddressSuccess,
    deleteAddressFail,

} = addressSlice.actions;

export default addressSlice.reducer;