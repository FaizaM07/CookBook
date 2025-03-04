const Comment = require("../models/comment");
const Recipes = require("../models/recipe");

// Add a comment (supports nested replies)
const addComment = async (req, res) => {
    const { recipeId, content, parentComment } = req.body;
    const user = req.user; // Comes from verifyToken middleware

    if (!recipeId || !content) {
        return res.status(400).json({ message: "Recipe ID and content are required" });
    }

    try {
        const newComment = new Comment({
            recipeId,
            content,
            user: { name: user.name, email: user.email },
            parentComment: parentComment || null
        });

        const savedComment = await newComment.save();

        // If this is a reply, update the parent comment
        if (parentComment) {
            await Comment.findByIdAndUpdate(parentComment, {
                $push: { replies: savedComment._id }
            });
        }

        res.status(201).json(savedComment);
    } catch (err) {
        res.status(500).json({ message: "Error adding comment", error: err });
    }
};

// Get all comments for a recipe
const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({ recipeId: req.params.recipeId })
            .populate("replies")
            .sort({ createdAt: -1 });

        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: "Error fetching comments", error: err });
    }
};

// Delete a comment
const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);

        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        await Comment.findByIdAndDelete(req.params.commentId);

        res.json({ message: "Comment deleted" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting comment", error: err });
    }
};

module.exports = { addComment, getComments, deleteComment };
