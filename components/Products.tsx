import React from 'react';
import { CheckCircleIcon } from './Icons';

const productBenefits = [
    { text: "Automate processes" },
    { text: "Improve efficiency" },
    { text: "Scale with confidence" },
];

const Products: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-gray-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Products
                        </h2>
                        <p className="text-lg text-gray-300 mb-8">
                            We develop smart, scalable, and future-ready software products tailored to meet the unique needs of modern businesses. Our products are designed to help you:
                        </p>
                        <ul className="space-y-4">
                            {productBenefits.map((benefit, index) => (
                                <li key={index} className="flex items-center">
                                    <CheckCircleIcon className="h-6 w-6 text-cyan-400 mr-3" />
                                    <span className="text-lg text-gray-200">{benefit.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <img 
                            src="https://picsum.photos/seed/products/500/350"
                            alt="Software product showcase"
                            className="rounded-lg shadow-2xl shadow-cyan-500/30"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;