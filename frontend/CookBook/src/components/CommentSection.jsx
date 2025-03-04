import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPaperPlane, FaReply, FaUserCircle } from "react-icons/fa"; // Icons for better UI

export default function CommentSection({ recipeId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [replyingTo, setReplyingTo] = useState(null);
    const [replyText, setReplyText] = useState("");

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/comments/${recipeId}`);
            setComments(res.data);
        } catch (err) {
            console.error("Error fetching comments:", err);
        }
    };

    const handleCommentSubmit = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            alert("Please login first!");
            return;
        }

        try {
            await axios.post("http://localhost:5000/comments", {
                recipeId,
                content: newComment
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });

            setNewComment("");
            fetchComments();
        } catch (err) {
            console.error("Error adding comment:", err);
        }
    };

    const handleReplySubmit = async (parentCommentId) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            alert("Please login first!");
            return;
        }

        try {
            await axios.post("http://localhost:5000/comments", {
                recipeId,
                content: replyText,
                parentComment: parentCommentId
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });

            setReplyingTo(null);
            setReplyText("");
            fetchComments();
        } catch (err) {
            console.error("Error adding reply:", err);
        }
    };

    const renderComments = (commentsList, level = 0) => {
        return commentsList.map((comment) => (
            <div key={comment._id} className="comment-box" style={{ marginLeft: `${level * 30}px` }}>
                <div className="comment-header">
                    <FaUserCircle className="avatar" />
                    <div>
                        <strong>{comment.user.email}</strong>
                        <p className="comment-content">{comment.content}</p>
                    </div>
                </div>
                <button className="reply-btn" onClick={() => setReplyingTo(comment._id)}>
                    <FaReply /> Reply
                </button>

                {replyingTo === comment._id && (
                    <div className="reply-section">
                        <textarea
                            className="reply-input"
                            placeholder="Write a reply..."
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                        />
                        <button className="submit-reply-btn" onClick={() => handleReplySubmit(comment._id)}>
                            <FaPaperPlane /> Submit Reply
                        </button>
                    </div>
                )}

                {comment.replies.length > 0 && renderComments(comment.replies, level + 1)}
            </div>
        ));
    };

    return (
        <div className="comments-container">
            <h3 className="comments-title">Comments</h3>
            <div className="comment-box">
                <textarea
                    className="comment-input"
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button className="submit-comment-btn" onClick={handleCommentSubmit}>
                    <FaPaperPlane /> Post Comment
                </button>
            </div>

            <div className="comments-list">
                {renderComments(comments)}
            </div>
        </div>
    );
}
