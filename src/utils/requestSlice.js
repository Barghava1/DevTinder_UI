import { createSlice } from "@reduxjs/toolkit";

const requestSlice=createSlice({
    name:"request",
    initialState:null,
    reducers:{
        addreq:(state,action)=>{
            return action.payload;
        },
        removereq:(state,action)=>{
            return null;
        }
    }
})


export const {addreq,removereq}=requestSlice.actions
export default requestSlice.reducer