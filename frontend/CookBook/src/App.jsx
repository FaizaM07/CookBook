import axios from 'axios';
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import MainNavigation from './components/MainNavigation';
import Home from './pages/Home';

// Function to fetch all recipes
const getAllRecipes = async () => {
    try {
        const response = await axios.get('http://localhost:5000/recipe');
        return response.data;  // Return the data directly, which will be passed to the Home component
    } catch (error) {
        console.error("Failed to fetch recipes:", error);
        return [];  // Return an empty array in case of error
    }
}

// Router setup
const router = createBrowserRouter([
    {
        path: "/", 
        element: <MainNavigation />, 
        children: [
            { path: "/", element: <Home />, loader: getAllRecipes }
        ]
    },
]);

// App component
export default function App() {
    return <RouterProvider router={router} />;
}
