import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addProduct } from "../actions/actions";
import { Data } from "./Data";





const AddProduct = () => {

    const state = useSelector(state => state);
    const {data} = state;
    const dispatch = useDispatch();

   const add = (name) =>{
    dispatch(addProduct(name))
    alert(name)
   }
    return(
        <div>
        <h1>Product Name</h1>
        <input type="text" placeholder="Enter Product Name"/>
        <button type="submit" onClick={add}>Submit</button>
     {/* <Data/>  */}
   </div> 
  
   )
 }  

export default AddProduct;