 import { createSlice } from "@reduxjs/toolkit";

 const initialState={
    email : "",
    name : "",
    _id : "",
    image:"",
 };

 export const userSlice= createSlice({
    name:"user",
    initialState,
    reducers:{
        loginRedux:(state,action)=>{
            // console.log(action.payload.data)
            // state.user= action.payload.data
            state._id= action.payload.data._id
            state.name= action.payload.data.name
            state.email= action.payload.data.email
            state.image = action.payload.data.image 
        },
        logoutRedux:(state,action)=>{
            state._id= "";
            state.name= "";
            state.email= "";
            state.image ="";
        },
    },
 });

 export const {loginRedux,logoutRedux} = userSlice.actions;

 export default userSlice.reducer

