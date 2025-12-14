import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/index.js";
import profileReducer from "./profile/index.js";

const store = configureStore({
    reducer:{
        auth:authReducer,
        profile:profileReducer
    }
})

export default store;