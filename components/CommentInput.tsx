import React, { useState } from 'react';

interface CommentInputProps {
    onAddComment: (name: string, comment: string) => void;
}

const CommentInput: React.FC<CommentInputProps> = ({ onAddComment }) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (comment.trim()) {
            onAddComment(name, comment);
            setName('');
            setComment('');
        }
    };

    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl shadow-cyan-500/10 mb-12" aria-label="Add a new comment">
            <h3 className="text-xl font-bold text-white mb-4">Leave a Comment</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="commenter-name" className="sr-only">Your Name (optional)</label>
                    <input
                        type="text"
                        id="commenter-name"
                        className="w-full p-3 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors placeholder-gray-400"
                        placeholder="Your Name (optional)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-label="Name field"
                    />
                </div>
                <div>
                    <label htmlFor="comment-text" className="sr-only">Your Comment (required)</label>
                    <textarea
                        id="comment-text"
                        className="w-full p-3 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors placeholder-gray-400 resize-y min-h-[100px]"
                        placeholder="Your Comment (required)"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                        aria-required="true"
                        aria-label="Comment text field"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!comment.trim()}
                    aria-label="Post Comment"
                >
                    Post Comment
                </button>
            </form>
        </div>
    );
};

export default CommentInput;