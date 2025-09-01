import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const getLinkClass = (path: string) => {
        return pathname === path
            ? 'text-blue-600 px-3 py-2 text-sm font-medium border-b-2 border-blue-600'
            : 'text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors';
    };

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <h1 className="text-2xl font-bold text-gray-900">Jaju's Professional Academy</h1>
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link to="/admission" className={getLinkClass('/admission')}>
                                ADMISSION
                            </Link>
                            <Link to="/programs" className={getLinkClass('/programs')}>
                                PROGRAM
                            </Link>
                            <Link to="/about" className={getLinkClass('/about')}>
                                ABOUT US
                            </Link>
                            <Link to="/contact" className={getLinkClass('/contact')}>
                                CONTACT
                            </Link>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        <div className="flex flex-col items-center space-y-4 py-4">
                            <Link to="/admission" className={getLinkClass('/admission')} onClick={() => setIsOpen(false)}>
                                ADMISSION
                            </Link>
                            <Link to="/programs" className={getLinkClass('/programs')} onClick={() => setIsOpen(false)}>
                                PROGRAM
                            </Link>
                            <Link to="/about" className={getLinkClass('/about')} onClick={() => setIsOpen(false)}>
                                ABOUT US
                            </Link>
                            <Link to="/contact" className={getLinkClass('/contact')} onClick={() => setIsOpen(false)}>
                                CONTACT
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;