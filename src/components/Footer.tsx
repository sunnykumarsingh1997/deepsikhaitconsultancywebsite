import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-cyber-dark border-t border-cyber-cyan/10 py-12 mt-20 font-mono text-sm">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-white font-bold mb-4">DEEPSIKHA IT CONSULTANCY LTD</h3>
                        <p className="text-gray-500 mb-2">1 Belmont Rd, St Andrew's, Bristol, UK, BS6 5AN</p>
                        <p className="text-gray-500 mb-2">Company ID: 16827360</p>
                        <a href="mailto:hello@deepsikhaitconsultancy.info" className="text-cyber-cyan hover:text-cyber-pink transition-colors">
                            hello@deepsikhaitconsultancy.info
                        </a>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">COMPANY</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-500 hover:text-cyber-cyan transition-colors">About Us</Link></li>
                            <li><a href="/#services" className="text-gray-500 hover:text-cyber-cyan transition-colors">Services</a></li>
                            <li><a href="/#shop" className="text-gray-500 hover:text-cyber-cyan transition-colors">Shop</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">LEGAL</h3>
                        <ul className="space-y-2">
                            <li><Link to="/terms" className="text-gray-500 hover:text-cyber-cyan transition-colors">Terms & Conditions</Link></li>
                            <li><Link to="/privacy" className="text-gray-500 hover:text-cyber-cyan transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/refund" className="text-gray-500 hover:text-cyber-cyan transition-colors">Refund Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-600">
                    <p>&copy; {new Date().getFullYear()} DEEPSIKHA IT CONSULTANCY LTD. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
