import React, { useState } from 'react';
import { MenuIcon, XIcon } from './Icons';

interface HeaderProps {
    refs: { [key: string]: React.RefObject<HTMLDivElement> };
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ refs, scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', ref: refs.home },
        { name: 'Services', ref: refs.services },
        { name: 'Products', ref: refs.products },
        { name: 'About Us', ref: refs.about },
        { name: 'Donate', ref: refs.donation },
        { name: 'Comments', ref: refs.comments }, // New link
        { name: 'Contact Us', ref: refs.contact },
    ];

    const handleLinkClick = (ref: React.RefObject<HTMLDivElement>) => {
        scrollToSection(ref);
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-gray-950 shadow-lg shadow-cyan-500/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={() => handleLinkClick(refs.home)}>
                            IM <span className="text-cyan-400">Softworks</span>
                        </h1>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleLinkClick(link.ref)}
                                    className="text-gray-300 hover:bg-gray-700 hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <XIcon className="block h-6 w-6" />
                            ) : (
                                <MenuIcon className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleLinkClick(link.ref)}
                                className="text-gray-300 hover:bg-gray-700 hover:text-cyan-300 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;