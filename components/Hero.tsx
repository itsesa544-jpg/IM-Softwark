import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-950 relative overflow-hidden">
             <div className="absolute inset-0 bg-grid-cyan-500/15 [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                    IM <span className="text-cyan-400">Softworks</span>
                </h1>
                
                <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
                    IM Softworks is an emerging software company that empowers clients’ business success through futuristic technology and innovative solutions. We believe that our growth is only possible when our clients benefit.
                    <br />
                    <span className="font-bengali text-gray-400 mt-2 block">
                        IM Softworks একটি উদীয়মান সফটওয়্যার কোম্পানি, যা ভবিষ্যতমুখী প্রযুক্তি ও সৃজনশীল সমাধানের মাধ্যমে ক্লায়েন্টদের ব্যবসায়িক সাফল্যে সহায়তা করে। আমরা বিশ্বাস করি— আমাদের উন্নতি তখনই সম্ভব, যখন আমাদের ক্লায়েন্ট লাভবান হবেন।
                    </span>
                </p>

                <div className="mt-10">
                    <p className="text-2xl md:text-3xl font-semibold text-cyan-300 italic">
                        We don’t just build software — We build possibilities.
                        <br />
                        <span className="font-bengali text-cyan-400 text-2xl mt-2 block">
                            আমরা শুধু সফটওয়্যার তৈরি করি না — আমরা সম্ভাবনা গড়ে তুলি।
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;