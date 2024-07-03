import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-hot-toast'

const initialState={
    productList : [],
    cartItem: [],
};

export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        setDataProduct :(state,action)=>{
        //    console.log(action)
           state.productList=[...action.payload]
        },
        addCartItem :(state,action)=>{
            // console.log(action)
            const check= state.cartItem.some((el)=> el._id === action.payload._id);
            if(check){
                toast("already item in cart");
            }
            else{
                toast("one item added");
                const total= action.payload.price;
            state.cartItem=
            [...state.cartItem,{...action.payload,qty:1,total:total}]
            }
        },
        deleteCartItem:(state,action)=>{
            // console.log(action)
            toast("deleted")
            const index= state.cartItem.findIndex((el)=>el._id === action.payload);
            state.cartItem.splice(index,1);
            console.log(index)
        
        },
        increaseQty:(state,action)=>{
          const index=state.cartItem.findIndex((el)=>el._id === action.payload)
          let qty= state.cartItem[index].qty;
          const qtyinc= ++qty
          state.cartItem[index].qty = qtyinc

          const price=state.cartItem[index].price;
          const total=price*qtyinc;
          state.cartItem[index].total=total;
        },
        decreaseQty:(state,action)=>{
            const index=state.cartItem.findIndex((el)=>el._id === action.payload)
            let qty= state.cartItem[index].qty
            if(qty>1){
                const qtydec= --qty
            state.cartItem[index].qty = qtydec

            const price=state.cartItem[index].price;
          const total=price*qtydec;
          state.cartItem[index].total=total;
            }
        },
        clearCart: (state) => {
            state.cartItem = [];
          },
    }
})

export const{setDataProduct,addCartItem,deleteCartItem,increaseQty,decreaseQty,clearCart} = productSlice.actions
export default productSlice.reducer