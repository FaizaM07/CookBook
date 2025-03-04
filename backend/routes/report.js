const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipe");
const Comment = require("../models/comment");
const User = require("../models/user");

router.get("/", async (req, res) => {
    const { type } = req.query;
    
    try {
        if (type === "recipePerformance") {
            const topCommented = await Recipe.find().sort({ commentsCount: -1 }).limit(5);
            const topFavorited = await Recipe.find().sort({ favoritesCount: -1 }).limit(5);

            res.json({
                topCommented: topCommented.map(r => ({ title: r.title, commentsCount: r.commentsCount || 0 })),
                topFavorited: topFavorited.map(r => ({ title: r.title, favoritesCount: r.favoritesCount || 0 }))
            });
        } 
        
        else if (type === "dateWise") {
            const now = new Date();
            const monthAgo = new Date();
            monthAgo.setMonth(now.getMonth() - 1);

            const newRecipes = await Recipe.find({ createdAt: { $gte: monthAgo } });
            const newComments = await Comment.find({ createdAt: { $gte: monthAgo } });
            const newUsers = await User.find({ createdAt: { $gte: monthAgo } });

            res.json({
                newRecipes: newRecipes.map(r => ({ title: r.title, createdAt: r.createdAt })),
                newComments: newComments.map(c => ({ user: c.user.email, content: c.content, createdAt: c.createdAt })),
                newUsers: newUsers.map(u => ({ email: u.email, joinedAt: u.createdAt }))
            });
        } 
        
        else if (type === "timeDateReport") {
            const today = new Date();
            const startOfDay = new Date(today.setHours(0, 0, 0, 0));
            const endOfDay = new Date(today.setHours(23, 59, 59, 999));

            const todayRecipes = await Recipe.find({ createdAt: { $gte: startOfDay, $lte: endOfDay } });
            const todayComments = await Comment.find({ createdAt: { $gte: startOfDay, $lte: endOfDay } });

            res.json({
                todayRecipes: todayRecipes.map(r => ({ title: r.title, createdAt: r.createdAt })),
                todayComments: todayComments.map(c => ({ user: c.user.email, content: c.content, createdAt: c.createdAt }))
            });
        } 
        
        else {
            res.status(400).json({ message: "Invalid report type" });
        }
    } catch (err) {
        res.status(500).json({ message: "Error generating report", error: err });
    }
});

module.exports = router;
