import React from 'react'
import bur from '../assets/bur.jpg'



export default function Home() {
  return (
    <>


      <section className='home'>
        <div className='left'>

<h1>      Food Recipe </h1>
        <h5> Unlock, organize, and savor your favorite recipes all in one place! From quick finds with tags to custom collections and favorites, Flavor Vault keeps your culinary creations just a tap away. Ready to build your ultimate recipe collection?    </h5>
   <button> Share your recipe</button>
        </div>
<div className='right'>
<img src={bur} width="320px" height="300px" alt="Burger Image" />


</div>

      </section>
      <div className='bg'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="0.7" d="M0,64L24,85.3C48,107,96,149,144,149.3C192,149,240,107,288,117.3C336,128,384,192,432,192C480,192,528,128,576,117.3C624,107,672,149,720,192C768,235,816,277,864,266.7C912,256,960,192,1008,144C1056,96,1104,64,1152,74.7C1200,85,1248,139,1296,149.3C1344,160,1392,128,1416,112L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>

</div>


    </>
  )
}