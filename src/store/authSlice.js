import { createSlice } from "@reduxjs/toolkit";

const initialState  = {   //initial state of authentication
    status : false,
    userData : null

}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {  //actions
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {   //actions
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions;  //export individual actions

export default authSlice.reducer;