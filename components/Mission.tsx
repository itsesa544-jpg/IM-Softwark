import React from 'react';

const Mission: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-gray-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Our Mission
                    <span className="font-bengali text-2xl md:text-3xl text-gray-400 block mt-1">আমাদের লক্ষ্য</span>
                </h2>
                <div className="max-w-3xl mx-auto mt-8 border-l-4 border-cyan-500 pl-6 text-left">
                    <p className="text-2xl md:text-3xl font-semibold italic text-cyan-200">
                        “Your profit is our success.”
                        <span className="font-bengali text-xl md:text-2xl block mt-1 text-cyan-300">
                            “আপনার লাভই আমাদের সফলতা।”
                        </span>
                    </p>
                    <p className="mt-6 text-lg text-gray-300">
                        In every project, we believe that our true achievement lies in the client’s benefit. That’s why every line of our code, every design, and every idea is driven by this mission.
                        <span className="font-bengali text-base block mt-2 text-gray-400">
                            আমরা প্রতিটি প্রজেক্টে বিশ্বাস করি— যদি ক্লায়েন্ট উপকৃত হন, তবেই আমরা সফল। সেই লক্ষ্যেই আমাদের প্রতিটি কোড, প্রতিটি ডিজাইন এবং প্রতিটি আইডিয়া।
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Mission;