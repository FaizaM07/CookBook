const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const { addComment, getComments, deleteComment } = require("../controller/comment");

// Route to add a comment
router.post("/", verifyToken, addComment);

// Route to get all comments for a recipe
router.get("/:recipeId", getComments);

// Route to delete a comment
router.delete("/:commentId", verifyToken, deleteComment);

module.exports = router;
