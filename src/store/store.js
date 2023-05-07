import { configureStore } from "@reduxjs/toolkit";
import userAuth from "../reducer/userAuth";

export const store = configureStore({
    reducer:{
        userStore:userAuth
    }
})

export default store;