import React from 'react';
import { UserIcon } from './Icons';

interface Comment {
    id: string;
    name: string;
    comment: string;
    timestamp: number;
}

interface CommentDisplayProps {
    comments: Comment[];
}

const formatTimeAgo = (timestamp: number): string => {
    const now = Date.now();
    const seconds = Math.floor((now - timestamp) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
        return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
    } else if (minutes < 60) {
        return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else if (hours < 24) {
        return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (days < 7) {
        return `${days} day${days === 1 ? '' : 's'} ago`;
    } else {
        return new Date(timestamp).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    }
};

const CommentDisplay: React.FC<CommentDisplayProps> = ({ comments }) => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl shadow-cyan-500/10" aria-live="polite">
            {comments.length === 0 ? (
                <p className="text-center text-gray-400 text-lg py-8">
                    No comments yet. Be the first to share your thoughts!
                </p>
            ) : (
                <div className="max-h-96 overflow-y-auto pr-2"> {/* Added max-h and overflow for scrolling */}
                    {comments.map((comment) => (
                        <div key={comment.id} className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-4 last:mb-0">
                            <div className="flex items-center mb-2">
                                <UserIcon className="h-6 w-6 text-cyan-400 mr-3" aria-hidden="true" />
                                <p className="font-semibold text-white text-lg" aria-label={`Comment by ${comment.name}`}>
                                    {comment.name}
                                </p>
                                <span className="text-gray-400 text-sm ml-auto" aria-label={`Posted ${formatTimeAgo(comment.timestamp)}`}>
                                    {formatTimeAgo(comment.timestamp)}
                                </span>
                            </div>
                            <p className="text-gray-300 mt-2">{comment.comment}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CommentDisplay;