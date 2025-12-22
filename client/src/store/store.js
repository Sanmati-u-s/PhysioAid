import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/index.js";
import profileReducer from "./profile/index.js";
import reminderReducer from "./reminder/index.js";

const store = configureStore({
    reducer:{
        auth:authReducer,
        profile:profileReducer,
        reminder:reminderReducer
    }
})

export default store;