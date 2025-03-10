

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

               
                <div className='right' style={{
                    flex: 1,
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '50%',
                }}>
                    
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

           
            {isOpen && (
                <Mod onClose={() => setIsOpen(false)}>
                    <InputForm setIsOpen={() => setIsOpen(false)} />
                </Mod>
            )}
        </>
    );
}
