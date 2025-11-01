import React, { useState, useEffect } from 'react';
import CommentInput from './CommentInput';
import CommentDisplay from './CommentDisplay';

interface Comment {
    id: string;
    name: string;
    comment: string;
    timestamp: number;
}

const generateDemoComments = (count: number): Comment[] => {
    const demoComments: Comment[] = [];
    const names = ['নাবিল', 'ফারহানা', 'আরিফ', 'Sophia', 'David', 'Rahul', 'Zara', 'Fatima', 'Liam', 'Olivia'];
    const bengaliComments = [
        'খুবই দরকারি একটি ওয়েবসাইট! আপনাদের কাজ অসাধারণ।',
        'অনেক ধন্যবাদ এমন সুন্দর উদ্যোগের জন্য।',
        'ভবিষ্যতের জন্য শুভকামনা।',
        'আমি মুগ্ধ! চমৎকার সব সার্ভিস।',
        'আপনাদের কাজের মান সত্যিই অসাধারণ।',
        'অনেক কিছু শিখতে পারলাম এখান থেকে, ধন্যবাদ!',
        'এই ধরনের প্রচেষ্টা আমাদের সবার জন্য অনুপ্রেরণা।',
        'দারুণ ডিজাইন এবং সহজ ব্যবহারযোগ্যতা!',
        'সফটওয়্যারগুলো দেখে খুবই আধুনিক মনে হচ্ছে।',
        'খুবই দ্রুত এবং কার্যকরী সমাধান।',
    ];
    const englishComments = [
        'Great website, very useful information!',
        'Love the design and services offered.',
        'Keep up the excellent work, IM Softworks!',
        'Very innovative solutions, impressed!',
        'This company is going to do great things.',
        'User-friendly interface, really appreciate it.',
        'Finally, a company that understands client needs.',
        'The mission statement truly resonates with me.',
        'Looking forward to seeing more products!',
        'Highly recommend their services.',
    ];

    for (let i = 0; i < count; i++) {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const isBengali = Math.random() < 0.5;
        const randomCommentText = isBengali
            ? bengaliComments[Math.floor(Math.random() * bengaliComments.length)]
            : englishComments[Math.floor(Math.random() * englishComments.length)];

        // Simulate timestamps over the last few months
        const timeOffset = Math.random() * (30 * 24 * 60 * 60 * 1000); // Up to 30 days
        const timestamp = Date.now() - timeOffset - (i * 10000); // Spread them out, older for higher index

        demoComments.push({
            id: (Date.now() + i).toString(), // Ensure unique ID
            name: randomName,
            comment: randomCommentText,
            timestamp: timestamp,
        });
    }

    return demoComments.sort((a, b) => b.timestamp - a.timestamp); // Sort by newest first
};

const CommentSection: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        const storedComments = localStorage.getItem('imsoftworks_comments');
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        } else {
            // Generate demo comments if none exist
            const demo = generateDemoComments(1000); // Generating 1000 demo comments
            setComments(demo);
            localStorage.setItem('imsoftworks_comments', JSON.stringify(demo));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('imsoftworks_comments', JSON.stringify(comments));
    }, [comments]);

    const addComment = (name: string, commentText: string) => {
        if (!commentText.trim()) return;

        const newComment: Comment = {
            id: Date.now().toString(),
            name: name.trim() || 'Anonymous',
            comment: commentText.trim(),
            timestamp: Date.now(),
        };
        setComments((prevComments) => [newComment, ...prevComments]); // Add new comment to the beginning
    };

    return (
        <section className="py-20 md:py-28 bg-gray-900" aria-labelledby="comments-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 id="comments-heading" className="text-3xl md:text-4xl font-bold text-white">
                        Comments ({comments.length})
                        <span className="font-bengali text-2xl md:text-3xl text-gray-400 block mt-1">মন্তব্য</span>
                    </h2>
                </div>

                <CommentInput onAddComment={addComment} />

                <CommentDisplay comments={comments} />
            </div>
        </section>
    );
};

export default CommentSection;