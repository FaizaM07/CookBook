

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import profileImg from '../assets/profile.png';
import CommentSection from '../components/CommentSection';

export default function RecipeDetails() {
    const recipe = useLoaderData();

    return (
        <div style={{
            minHeight: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%)',
            padding: '40px 20px',
            boxSizing: 'border-box'
        }}>
            <div style={{
                width: '80%',
                maxWidth: '900px',
                background: 'white',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                padding: '30px',
                textAlign: 'center'
            }}>
                {/* Profile Section */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '20px'
                }}>
                    <img src={profileImg} alt="Profile" width="50px" height="50px" style={{ borderRadius: '50%' }} />
                    <h5 style={{
                        fontSize: '1rem',
                        color: '#666',
                        margin: 0
                    }}>{recipe.email}</h5>
                </div>

                {/* Recipe Title */}
                <h2 style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: '#FF9B71',
                    marginBottom: '20px'
                }}>{recipe.title}</h2>

                {/* Recipe Image */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '20px'
                }}>
                    <img src={`http://localhost:5000/images/${recipe.coverImage}`} 
                        alt="Recipe" 
                        style={{
                            width: '100%',
                            maxWidth: '400px',
                            height: 'auto',
                            borderRadius: '10px',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                        }}
                    />
                </div>

                {/* Ingredients & Instructions Section */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '20px',
                    textAlign: 'left'
                }}>
                    {/* Ingredients */}
                    <div style={{
                        flex: 1,
                        minWidth: '300px',
                        background: '#FFE4D6',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                    }}>
                        <h3 style={{
                            color: '#FF9B71',
                            marginBottom: '10px'
                        }}>Ingredients</h3>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            color: '#333'
                        }}>
                            {recipe.ingredients.map((item, index) => (
                                <li key={index} style={{
                                    padding: '5px 0',
                                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
                                }}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Instructions */}
                    <div style={{
                        flex: 2,
                        minWidth: '300px',
                        background: '#E3F2FD',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                    }}>
                        <h3 style={{
                            color: '#0077b6',
                            marginBottom: '10px'
                        }}>Instructions</h3>
                        <p style={{
                            color: '#333',
                            lineHeight: '1.5'
                        }}>{recipe.instructions}</p>
                    </div>
                </div>
            </div>

            {/* Comments Section  */}
            <div style={{
                width: '80%',
                maxWidth: '900px',
                marginTop: '40px'
            }}>
                <CommentSection recipeId={recipe._id} style={{ color: 'black' }} />
            </div>
        </div>
    );
}
