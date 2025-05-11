import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./userSlice"
import feedReducer from "./feedSlice"
import connectionsReducer from "./connectionSlice"
import requestReducer from "./requestSlice"

const appStore=configureStore({
    reducer:{
        user:userreducer,
        feed:feedReducer,
        connections:connectionsReducer,
        request:requestReducer
    },
    devTools:true
})

export default appStore;