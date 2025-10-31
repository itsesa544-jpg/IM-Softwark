import React from 'react';

interface FooterProps {
    refs: { [key: string]: React.RefObject<HTMLDivElement> };
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
}


const Footer: React.FC<FooterProps> = ({ refs, scrollToSection }) => {

     const navLinks = [
        { name: 'Home', ref: refs.home },
        { name: 'About Us', ref: refs.about },
        { name: 'Products', ref: refs.products },
        { name: 'Services', ref: refs.services },
        { name: 'Donate', ref: refs.donation },
        { name: 'Contact Us', ref: refs.contact },
    ];

    const handleLinkClick = (ref: React.RefObject<HTMLDivElement> | null) => {
        if (ref) {
            scrollToSection(ref);
        }
    };


    return (
        <footer className="bg-gray-950 text-gray-400" ref={refs.contact}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Us Section */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold text-white mb-4">IM <span className="text-cyan-400">Softworks</span></h3>
                        <p className="max-w-md">
                             IM Softworks is an emerging software company focused on empowering businesses with futuristic technology and innovative solutions. We don’t just build software — we build possibilities.
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
                        <ul className="space-y-2">
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <button onClick={() => handleLinkClick(link.ref)} className="hover:text-cyan-400 transition-colors">
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Connect with Us</h3>
                        <p className="mb-4">
                            <a href="mailto:im.softwark.team@gmail.com" className="hover:text-cyan-400 transition-colors">
                                im.softwark.team@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <p>&copy; {new Date().getFullYear()} IM Softworks. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};


export default Footer;
