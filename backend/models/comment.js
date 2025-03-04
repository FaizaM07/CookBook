const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    recipeId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Recipes", 
        required: true 
    },
    user: { 
        name: String, 
        email: String 
    },
    content: { 
        type: String, 
        required: true 
    },
    parentComment: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Comment", 
        default: null 
    }, 
    replies: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Comment" 
    }],
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
