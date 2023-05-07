import {createSlice} from "@reduxjs/toolkit";
const userAuth = createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        logIN : (state,action)=>{
            state.user = action.payload;
        },
        logOut: (state)=>{
            state.user = null;
        }
    }
})

export const {logIN,logOut} = userAuth.actions;
export default userAuth.reducer;