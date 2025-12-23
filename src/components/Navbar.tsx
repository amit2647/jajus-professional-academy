import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/nav_logo.png';

function Navbar() {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const getLinkClass = (path: string) => {
        return pathname === path
            ? 'text-violet-600 px-3 py-2 text-sm font-medium border-b-2 border-violet-600'
            : 'text-gray-900 hover:text-violet-600 px-3 py-2 text-sm font-medium transition-colors';
    };

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo + Title */}
                    <Link to="/" className="flex items-center space-x-3">
                        <img src={Logo} alt="Logo" className="h-10 sm:h-12 w-auto" />
                        <h1 className="font-bold text-gray-800 tracking-tight text-lg sm:text-2xl leading-tight">
                            Jaju's <span className="text-violet-700">Professional Academy</span>
                        </h1>
                    </Link>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link to="/" className={getLinkClass('/')}>
                                HOME
                            </Link>
                            <Link to="/admission" className={getLinkClass('/admission')}>
                                COURSES
                            </Link>
                            <Link to="/about" className={getLinkClass('/about')}>
                                ABOUT US
                            </Link>
                            <Link to="/gallery" className={getLinkClass('/gallery')}>
                                GALLERY
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="flex flex-col items-center space-y-4 py-4">
                            <Link to="/" className={getLinkClass('/')} onClick={() => setIsOpen(false)}>
                                HOME
                            </Link>
                            <Link to="/admission" className={getLinkClass('/admission')} onClick={() => setIsOpen(false)}>
                                COURSES
                            </Link>
                            <Link to="/about" className={getLinkClass('/about')} onClick={() => setIsOpen(false)}>
                                ABOUT US
                            </Link>
                            <Link to="/gallery" className={getLinkClass('/gallery')} onClick={() => setIsOpen(false)}>
                                GALLERY
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
