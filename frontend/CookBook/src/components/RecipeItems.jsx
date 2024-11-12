import React from "react";
import { BsStopwatch } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import foodImg from '../assets/indian.jpg';


export default function RecipeItems() {
    const allRecipes=useLoaderData()
    console.log(allRecipes)
    return (
    <>

      <div className='card-container'>

             {
allRecipes?.map((item,index)=> {
  return (
    <div key={index} className='card' > 
        <img src={foodImg} width="120px" height="100px "></img>

        <div className='card-body' > 
        <div className='title'>{item.title}</div>
        <div className='icons'>
         <div className='timer'><BsStopwatch /> 30mins
         </div>
         <IoMdHeart /> 
        </div>



        </div>

        </div>
  )

})


             }


      </div>

    </>
    )


}