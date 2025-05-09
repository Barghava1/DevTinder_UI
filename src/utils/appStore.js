import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./userSlice"
import feedReducer from "./feedSlice"
import connectionsReducer from "./connectionSlice"

const appStore=configureStore({
    reducer:{
        user:userreducer,
        feed:feedReducer,
        connections:connectionsReducer
    },
    devTools:true
})

export default appStore;