import React, { useState } from "react";
import InputForm from "./InputForm"; // Adjust the path as needed

import Mod from "./Mod";


export default function Navbar() {
  const [isOpen,setIsOpen] = useState(false)

  const checkLogin=()=>{
    setIsOpen(true)
  }


    return (
    <>
    <header>
    <h2>CookBook</h2>
    <ul>
    <li>Home</li>
    <li>My Recipe</li>
    <li>Favourites</li>
    <li onClick={checkLogin}>Login</li>
    
    </ul>
    </header>
    { (isOpen) && <Mod onClose={()=>setIsOpen(false)}><InputForm setIsOpen={()=>setIsOpen(false)}/></Mod>}
    </>

    )

}