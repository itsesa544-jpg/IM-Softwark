import React from 'react';
import { CodeIcon, WebAppIcon, MobileIcon, CloudIcon, ApiIcon, DesignIcon } from './Icons';

const services = [
    {
        name: 'Custom Software Development',
        bengaliName: 'কাস্টম সফটওয়্যার ডেভেলপমেন্ট',
        icon: <CodeIcon className="h-10 w-10 text-cyan-400" />,
    },
    {
        name: 'Web Applications',
        bengaliName: 'ওয়েব অ্যাপ্লিকেশন',
        icon: <WebAppIcon className="h-10 w-10 text-cyan-400" />,
    },
    {
        name: 'Mobile Apps',
        bengaliName: 'মোবাইল অ্যাপ',
        icon: <MobileIcon className="h-10 w-10 text-cyan-400" />,
    },
    {
        name: 'Cloud Solutions',
        bengaliName: 'ক্লাউড সল্যুশন',
        icon: <CloudIcon className="h-10 w-10 text-cyan-400" />,
    },
    {
        name: 'API Development',
        bengaliName: 'API ডেভেলপমেন্ট',
        icon: <ApiIcon className="h-10 w-10 text-cyan-400" />,
    },
    {
        name: 'UI/UX Design',
        bengaliName: 'UI/UX ডিজাইন',
        icon: <DesignIcon className="h-10 w-10 text-cyan-400" />,
    },
];

const Services: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-gray-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Our Services
                        <span className="font-bengali text-2xl md:text-3xl text-gray-400 block mt-1">আমাদের সার্ভিসসমূহ</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2 transition-all duration-300">
                            <div className="flex items-center justify-center mb-6 bg-gray-700 h-20 w-20 rounded-full mx-auto">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white text-center">{service.name}</h3>
                            <p className="font-bengali text-lg text-gray-400 text-center mt-1">{service.bengaliName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
