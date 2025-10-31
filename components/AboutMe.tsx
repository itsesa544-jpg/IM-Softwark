import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-gray-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/3">
                        <div className="relative w-64 h-64 mx-auto">
                            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-2xl opacity-50"></div>
                            <img 
                                src="https://res.cloudinary.com/dlklqihg6/image/upload/v1760308052/kkchmpjdp9izcjfvvo4k.jpg" 
                                alt="Mohammad Esa Ali"
                                className="relative w-64 h-64 rounded-full object-cover border-4 border-gray-700 shadow-lg"
                            />
                        </div>
                    </div>
                    <div className="lg:w-2/3 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            👋 About Me
                        </h2>
                        <p className="text-lg text-gray-300 mb-6">
                            Hello, I am Mohammad Esa Ali, a passionate and creative tech enthusiast.
                            I specialize in Software Development, Web Solutions, and Creative Design. My goal is to help businesses grow by building smart, future-ready, and user-friendly digital solutions.
                        </p>
                        <blockquote className="border-l-4 border-cyan-400 pl-4 py-2 bg-gray-800 rounded-r-lg">
                            <p className="text-xl italic text-cyan-200">
                                "I believe: Success comes when your clients succeed."
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;