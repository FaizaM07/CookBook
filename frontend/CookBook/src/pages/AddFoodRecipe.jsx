

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddFoodRecipe() {
    const [recipeData, setRecipeData] = useState({});
    const [previewImage, setPreviewImage] = useState(null);
    const navigate = useNavigate();

    const onHandleChange = (e) => {
        let val = (e.target.name === "ingredients") 
            ? e.target.value.split(",") 
            : (e.target.name === "file") 
                ? e.target.files[0] 
                : e.target.value;
        
        if (e.target.name === "file" && e.target.files[0]) {
            setPreviewImage(URL.createObjectURL(e.target.files[0]));
        }
        
        setRecipeData(pre => ({ ...pre, [e.target.name]: val }));
    };

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        console.log(recipeData);
        await axios.post("http://localhost:5000/recipe", recipeData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'authorization': 'bearer ' + localStorage.getItem("token")
            }
        })
        .then(() => navigate("/"));
    };

    return (
        <div style={{
            minHeight: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            padding: '40px 20px',
            boxSizing: 'border-box'
        }}>
            <div style={{
                width: '90vw',
                maxWidth: '1200px',
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                overflow: 'hidden'
            }}>
                <div style={{
                    background: '#FFE4D6',
                    padding: '30px',
                    textAlign: 'center',
                    borderBottom: '1px solid #FFD1B8'
                }}>
                    <h1 style={{
                        margin: 0,
                        color: '#FF9B71',
                        fontSize: '2rem',
                        fontWeight: '600'
                    }}>Create New Recipe</h1>
                </div>

                <form onSubmit={onHandleSubmit} style={{
                    padding: '30px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                }}>
                    <div style={{ width: '48%', marginBottom: '24px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#666', fontSize: '0.9rem' }}>Recipe Title</label>
                        <input
                            type="text"
                            name="title"
                            onChange={onHandleChange}
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: '2px solid #E8EDF1',
                                borderRadius: '10px',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                            placeholder="Enter recipe title"
                        />
                    </div>

                    <div style={{ width: '48%', marginBottom: '24px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#666', fontSize: '0.9rem' }}>Cooking Time</label>
                        <input
                            type="text"
                            name="time"
                            onChange={onHandleChange}
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: '2px solid #E8EDF1',
                                borderRadius: '10px',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                            placeholder="e.g., 30 minutes"
                        />
                    </div>

                    <div style={{ width: '100%', marginBottom: '24px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#666', fontSize: '0.9rem' }}>Ingredients</label>
                        <textarea
                            name="ingredients"
                            rows="3"
                            onChange={onHandleChange}
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: '2px solid #E8EDF1',
                                borderRadius: '10px',
                                fontSize: '1rem',
                                outline: 'none',
                                resize: 'vertical'
                            }}
                            placeholder="Enter ingredients separated by commas"
                        />
                    </div>

                    <div style={{ width: '100%', marginBottom: '24px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#666', fontSize: '0.9rem' }}>Cooking Instructions</label>
                        <textarea
                            name="instructions"
                            rows="5"
                            onChange={onHandleChange}
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: '2px solid #E8EDF1',
                                borderRadius: '10px',
                                fontSize: '1rem',
                                outline: 'none',
                                resize: 'vertical'
                            }}
                            placeholder="Enter step-by-step instructions"
                        />
                    </div>

                    <div style={{ width: '100%', marginBottom: '24px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#666', fontSize: '0.9rem' }}>Recipe Image</label>
                        <div style={{
                            border: '2px dashed #E8EDF1',
                            borderRadius: '10px',
                            padding: '20px',
                            textAlign: 'center',
                            background: '#F8FAFC'
                        }}>
                            {previewImage && (
                                <div style={{ marginBottom: '15px' }}>
                                    <img src={previewImage} alt="Recipe preview" style={{ maxWidth: '200px', borderRadius: '8px' }} />
                                </div>
                            )}
                            <input type="file" name="file" onChange={onHandleChange} style={{ width: '100%', padding: '12px' }} />
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                        marginTop: '20px'
                    }}>
                        <button type="button" onClick={() => navigate('/')} style={{
                            padding: '12px 24px',
                            borderRadius: '8px',
                            border: '2px solid #E8EDF1',
                            background: 'white',
                            color: '#666',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}>
                            Cancel
                        </button>
                        <button type="submit" style={{
                            padding: '12px 32px',
                            borderRadius: '8px',
                            border: 'none',
                            background: '#FF9B71',
                            color: 'white',
                            fontSize: '1rem',
                            fontWeight: '500',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 15px rgba(255, 155, 113, 0.2)'
                        }}>
                            Add Recipe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
