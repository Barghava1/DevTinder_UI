import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./userSlice"
import feedReducer from "./feedSlice"

const appStore=configureStore({
    reducer:{
        user:userreducer,
        feed:feedReducer,
    },
    devTools:true
})

export default appStore;