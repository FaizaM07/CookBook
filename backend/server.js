const express = require("express");
const app = express();
//const dotenv =require("dotenv").config();
const connectDb = require("./config/connectionDb");
const cors = require("cors");
require('dotenv').config();







// Set up port from environment variables
const PORT = process.env.PORT || 3000;

// Establish database connection
connectDb();

// Apply middleware
app.use(express.json());  // For parsing application/json
app.use(cors());  // Enable CORS for all domains
app.use("/",require("./routes/user"))


require('dotenv').config();
console.log('Secret Key:', process.env.SECRET_KEY);  // This should output your secret key

// Importing route handlers
const recipeRoutes = require("./routes/recipe");

// Use recipe routes
app.use("/recipe", recipeRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
