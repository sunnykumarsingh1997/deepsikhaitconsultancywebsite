import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, ShoppingBag } from 'lucide-react';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="min-h-screen bg-cyber-black text-white selection:bg-cyber-cyan selection:text-cyber-black flex flex-col">
            <nav className="fixed top-0 w-full z-50 bg-cyber-black/80 backdrop-blur-md border-b border-cyber-cyan/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/" className="flex items-center space-x-2">
                            <Terminal className="w-6 h-6 text-cyber-cyan" />
                            <span className="font-mono font-bold text-xl tracking-tighter text-glow">
                                DEEPSIKHA<span className="text-cyber-pink">.IT</span>
                            </span>
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                {isHome ? (
                                    <>
                                        <a href="#services" className="hover:text-cyber-cyan transition-colors font-mono text-sm">SERVICES</a>
                                        <a href="#shop" className="hover:text-cyber-pink transition-colors font-mono text-sm flex items-center gap-1">
                                            <ShoppingBag className="w-4 h-4" /> SHOP
                                        </a>
                                        <a href="#contact" className="px-4 py-2 border border-cyber-cyan/50 rounded hover:bg-cyber-cyan/10 transition-colors font-mono text-sm">
                                            INIT_CONTACT
                                        </a>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/#services" className="hover:text-cyber-cyan transition-colors font-mono text-sm">SERVICES</Link>
                                        <Link to="/#shop" className="hover:text-cyber-pink transition-colors font-mono text-sm flex items-center gap-1">
                                            <ShoppingBag className="w-4 h-4" /> SHOP
                                        </Link>
                                        <Link to="/#contact" className="px-4 py-2 border border-cyber-cyan/50 rounded hover:bg-cyber-cyan/10 transition-colors font-mono text-sm">
                                            INIT_CONTACT
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex-grow">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
