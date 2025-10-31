import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Services from './components/Services';
import AboutMe from './components/AboutMe';
import Products from './components/Products';
import Donation from './components/Donation';
import Footer from './components/Footer';

const App: React.FC = () => {
    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const productsRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const donationRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const sectionRefs = {
        home: homeRef,
        about: aboutRef,
        products: productsRef,
        services: servicesRef,
        donation: donationRef,
        contact: contactRef,
    };

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-gray-900 text-gray-100 min-h-screen antialiased">
            <Header refs={sectionRefs} scrollToSection={scrollToSection} />
            <main>
                <div ref={homeRef}>
                    <Hero />
                </div>
                <div ref={servicesRef}>
                    <Services />
                </div>
                <div ref={productsRef}>
                    <Products />
                </div>
                <div ref={aboutRef}>
                     <Mission />
                     <AboutMe />
                </div>
                <div ref={donationRef}>
                    <Donation />
                </div>
                <div ref={contactRef}>
                    {/* The contact section is integrated into the Footer */}
                </div>
            </main>
            <Footer refs={sectionRefs} scrollToSection={scrollToSection} />
        </div>
    );
};

export default App;
