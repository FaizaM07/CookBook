// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import bur from '../assets/Bur.jpg';
// import dpp from '../assets/dpp.jpg';
// import ps from '../assets/ps.jpg';
// import InputForm from '../components/InputForm';
// import Mod from '../components/Mod';
// import RecipeItems from '../components/RecipeItems';

// export default function Home() {
//     const navigate = useNavigate();
//     const [isOpen, setIsOpen] = useState(false);

//     const addRecipe = () => {
//         let token = localStorage.getItem("token");
//         if (token) navigate("/addRecipe");
//         else {
//             setIsOpen(true);
//         }
//     };

//     return (
//         <>
//             <section className='home'>
//                 <div className='left'>
//                     <h1>Food Recipe</h1>
//                     <h5 style={{ 
//     marginTop: '40px', // Increase margin to ensure it doesn't overlap
//     fontSize: '16px', // Slightly larger font
//     lineHeight: '1.8', 
//     fontFamily: 'Arial, sans-serif', 
//     position: 'relative',
//     zIndex: 4, // Ensure it stays above any overlapping elements
// }}>
//     Unlock, organize, and savor your favorite recipes all in one place! From quick finds with tags to custom collections and favorites, Flavor Vault keeps your culinary creations just a tap away. Ready to build your ultimate recipe collection?
// </h5>

                    
//                     <button onClick={addRecipe}>Share your recipe</button>
//                 </div>
//                 <div className='right'>
//                     <div className="image-container" style={{ position: 'relative', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '300px' }}>
//                         <img
//                             src={dpp}
//                             alt="Food Item 1"
//                             style={{
//                                 width: '220px',
//                                 height: '220px',
//                                 borderRadius: '50%',
//                                 position: 'absolute',
//                                 zIndex: 1,
//                                 top: '10px',
//                                 left: '-300px',
//                                 boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
//                             }}
//                         />
//                         <img
//                             src={bur}
//                             alt="Food Item 2"
//                             style={{
//                                 width: '310px',
//                                 height: '310px',
//                                 borderRadius: '50%',
//                                 position: 'absolute',
//                                 zIndex: 0,
//                                 top: '100px',
//                                 left: '-250px',
//                                 filter: 'blur(2px)',
//                                 boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
//                             }}
//                         />
//                         <img
//                             src={ps}
//                             alt="Food Item 3"
//                             style={{
//                                 width: '150px',
//                                 height: '150px',
//                                 borderRadius: '100%',
//                                 position: 'absolute',
//                                 zIndex: 2,
//                                 top: '150px',
//                                 left: '-350px',
//                                 boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
//                             }}
//                         />
//                     </div>
//                 </div>
//             </section>
//             <div className='bg'>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//                     <path
//                         fill="#000b76"
//                         fillOpacity="0.7"
//                         d="M0,64L24,85.3C48,107,96,149,144,149.3C192,149,240,107,288,117.3C336,128,384,192,432,192C480,192,528,128,576,117.3C624,107,672,149,720,192C768,235,816,277,864,266.7C912,256,960,192,1008,144C1056,96,1104,64,1152,74.7C1200,85,1248,139,1296,149.3C1344,160,1392,128,1416,112L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
//                     ></path>
//                 </svg>
//             </div>
//             {isOpen && (
//                 <Mod onClose={() => setIsOpen(false)}>
//                     <InputForm setIsOpen={() => setIsOpen(false)} />
//                 </Mod>
//             )}
//             <div className='recipe'>
//                 <RecipeItems />
//             </div>
//         </>
//     );
// }



//---------------------------------------------------------------------------------------------------------


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import InputForm from '../components/InputForm';
// import Mod from '../components/Mod';
// import RecipeItems from '../components/RecipeItems';

// export default function Home() {
//     const navigate = useNavigate();
//     const [isOpen, setIsOpen] = useState(false);

//     const addRecipe = () => {
//         let token = localStorage.getItem("token");
//         if (token) navigate("/addRecipe");
//         else {
//             setIsOpen(true);
//         }
//     };

//     return (
//         <>
//             <section className='home' style={{
//                 minHeight: '100vh',
//                 width: '100%',
//                 margin: 0,
//                 padding: '0 5%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 background: 'linear-gradient(135deg, var(--white) 0%, var(--light-gray) 100%)',
//                 position: 'relative',
//                 overflow: 'hidden'
//             }}>
//                 <div className='left' style={{
//                     flex: '1',
//                     maxWidth: '600px',
//                     position: 'relative',
//                     zIndex: 2
//                 }}>
//                     <h1 style={{
//                         fontSize: '4rem',
//                         fontWeight: '700',
//                         background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--pastel-orange) 100%)',
//                         WebkitBackgroundClip: 'text',
//                         WebkitTextFillColor: 'transparent',
//                         marginBottom: '2rem',
//                         lineHeight: '1.2'
//                     }}>
//                         Discover & Share Food Recipes
//                     </h1>
//                     <h5 style={{
//                         marginTop: '40px',
//                         fontSize: '1.2rem',
//                         lineHeight: '1.8',
//                         color: 'var(--text-primary)',
//                         opacity: '0.9',
//                         maxWidth: '600px',
//                         position: 'relative',
//                         zIndex: 4,
//                         textShadow: '0 1px 2px rgba(0,0,0,0.05)'
//                     }}>
//                         Unlock, organize, and savor your favorite recipes all in one place! From quick finds with tags to custom collections and favorites, Flavor Vault keeps your culinary creations just a tap away. Ready to build your ultimate recipe collection?
//                     </h5>

//                     <button 
//                         onClick={addRecipe}
//                         style={{
//                             marginTop: '2.5rem',
//                             backgroundColor: 'var(--pastel-orange)',
//                             color: 'var(--text-primary)',
//                             padding: '1.2rem 2.5rem',
//                             borderRadius: '30px',
//                             fontSize: '1.1rem',
//                             fontWeight: '500',
//                             boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
//                             transition: 'all 0.3s ease',
//                             border: 'none',
//                             cursor: 'pointer',
//                             position: 'relative',
//                             overflow: 'hidden'
//                         }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.transform = 'translateY(-2px)';
//                             e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.transform = 'translateY(0)';
//                             e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
//                         }}
//                     >
//                         Share your recipe
//                     </button>
//                 </div>
//                 <div className='right' style={{
//                     flex: '1',
//                     position: 'relative',
//                     height: '100vh',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                 }}>
//                     <div className="image-container" style={{
//                         position: 'relative',
//                         width: '100%',
//                         height: '80%',
//                         perspective: '1000px'
//                     }}>
//                         <div style={{
//                             position: 'absolute',
//                             width: '300px',
//                             height: '300px',
//                             top: '10%',
//                             right: '10%',
//                             borderRadius: '50%',
//                             overflow: 'hidden',
//                             boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
//                             transform: 'rotateY(-15deg)',
//                             transition: 'all 0.5s ease'
//                         }}>
//                             <img
//                                 src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
//                                 alt="Healthy Food Bowl"
//                                 style={{
//                                     width: '100%',
//                                     height: '100%',
//                                     objectFit: 'cover',
//                                     transform: 'scale(1.1)',
//                                 }}
//                             />
//                         </div>
//                         <div style={{
//                             position: 'absolute',
//                             width: '400px',
//                             height: '400px',
//                             top: '30%',
//                             right: '25%',
//                             borderRadius: '50%',
//                             overflow: 'hidden',
//                             boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
//                             transform: 'rotateY(15deg)',
//                             transition: 'all 0.5s ease'
//                         }}>
//                             <img
//                                 src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
//                                 alt="Gourmet Dish"
//                                 style={{
//                                     width: '100%',
//                                     height: '100%',
//                                     objectFit: 'cover',
//                                     filter: 'blur(2px)',
//                                 }}
//                             />
//                         </div>
//                         <div style={{
//                             position: 'absolute',
//                             width: '250px',
//                             height: '250px',
//                             top: '50%',
//                             right: '5%',
//                             borderRadius: '50%',
//                             overflow: 'hidden',
//                             boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
//                             transform: 'rotateY(-20deg)',
//                             transition: 'all 0.5s ease'
//                         }}>
//                             <img
//                                 src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
//                                 alt="Pizza"
//                                 style={{
//                                     width: '100%',
//                                     height: '100%',
//                                     objectFit: 'cover',
//                                 }}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <div className='bg' style={{
//                 position: 'absolute',
//                 bottom: 0,
//                 left: 0,
//                 width: '100%',
//                 zIndex: 1
//             }}>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{
//                     filter: 'drop-shadow(0 -10px 20px rgba(0,0,0,0.1))'
//                 }}>
//                     <path
//                         fill="var(--pastel-blue)"
//                         fillOpacity="0.3"
//                         d="M0,64L24,85.3C48,107,96,149,144,149.3C192,149,240,107,288,117.3C336,128,384,192,432,192C480,192,528,128,576,117.3C624,107,672,149,720,192C768,235,816,277,864,266.7C912,256,960,192,1008,144C1056,96,1104,64,1152,74.7C1200,85,1248,139,1296,149.3C1344,160,1392,128,1416,112L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
//                     ></path>
//                 </svg>
//             </div>
//             {isOpen && (
//                 <Mod onClose={() => setIsOpen(false)}>
//                     <InputForm setIsOpen={() => setIsOpen(false)} />
//                 </Mod>
//             )}
//             <div className='recipe' style={{
//                 position: 'relative',
//                 zIndex: 5,
//                 padding: '4rem 0',
//                 background: 'var(--white)'
//             }}>
//                 <RecipeItems />
//             </div>
//         </>
//     );
// }


//----------------------------------------------------------------------------------------------------


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputForm from '../components/InputForm';
import Mod from '../components/Mod';
import RecipeItems from '../components/RecipeItems';

export default function Home() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const addRecipe = () => {
        let token = localStorage.getItem("token");
        if (token) navigate("/addRecipe");
        else {
            setIsOpen(true);
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className='home' style={{
                minHeight: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '5% 10%',
                background: 'linear-gradient(135deg, var(--white) 0%, var(--light-gray) 100%)',
                position: 'relative',
                overflow: 'hidden',
                boxSizing: 'border-box'
            }}>
                {/* Left Content */}
                <div className='left' style={{ flex: 1, maxWidth: '50%', position: 'relative', zIndex: 2 }}>
                    <h1 style={{
                        fontSize: '4rem',
                        fontWeight: '700',
                        background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--pastel-orange) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '2rem'
                    }}>
                        Discover & Share Food Recipes
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-primary)',
                        opacity: '0.9',
                        maxWidth: '500px'
                    }}>
                         Unlock, organize and savor your favorite recipes all in one place! From quick finds with tags to custom collections and favorites, Flavor Vault keeps your culinary creations just a tap away. Ready to build your ultimate recipe collection?
                    </p>
                    <button onClick={addRecipe} style={{
                        marginTop: '2rem',
                        backgroundColor: 'var(--pastel-orange)',
                        color: 'var(--text-primary)',
                        padding: '1rem 2rem',
                        borderRadius: '30px',
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}>
                        Share your recipe
                    </button>
                </div>

                {/* Right Content (Floating Circles) */}
                <div className='right' style={{
                    flex: 1,
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '50%',
                }}>
                    {/* Large center image */}
                    <div style={{
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                        animation: 'float 6s ease-in-out infinite'
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                            alt="Gourmet Food"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>

                    {/* Floating circles */}
                    {[{
                        src: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
                        size: 150,
                        top: "20%",
                        right: "10%"
                    }, {
                        src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
                        size: 180,
                        bottom: "15%",
                        left: "20%"
                    }, {
                        src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
                        size: 120,
                        top: "35%",
                        left: "10%"
                    }].map((circle, index) => (
                        <div key={index} style={{
                            position: 'absolute',
                            width: `${circle.size}px`,
                            height: `${circle.size}px`,
                            borderRadius: '50%',
                            overflow: 'hidden',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                            animation: 'float 5s ease-in-out infinite',
                            ...circle
                        }}>
                            <img
                                src={circle.src}
                                alt="Food"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    ))}

                    <style>
                        {`
                            @keyframes float {
                                0% { transform: translateY(0px); }
                                50% { transform: translateY(-20px); }
                                100% { transform: translateY(0px); }
                            }
                        `}
                    </style>
                </div>
            </section>

            {/* Recipe Items Section */}
            <div className='recipe' style={{
                padding: '4rem 5%',
                background: 'var(--white)',
                width: '100%'
            }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '2.5rem',
                    fontWeight: '600',
                    marginBottom: '2rem',
                    color: 'var(--text-primary)',
                    background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--pastel-orange) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Explore Recipes
                </h2>
                <RecipeItems gridStyle={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2rem',
                    maxWidth: '1400px',
                    margin: '0 auto'
                }} />
            </div>

            {/* Modal */}
            {isOpen && (
                <Mod onClose={() => setIsOpen(false)}>
                    <InputForm setIsOpen={() => setIsOpen(false)} />
                </Mod>
            )}
        </>
    );
}
