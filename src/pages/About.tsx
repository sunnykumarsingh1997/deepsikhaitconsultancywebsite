import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <div className="pt-20 min-h-screen bg-cyber-black text-white px-4">
            <div className="max-w-4xl mx-auto py-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-mono font-bold text-cyber-cyan mb-8"
                >
                    ABOUT_US
                </motion.h1>

                <div className="prose prose-invert prose-lg font-mono">
                    <p className="text-xl text-gray-300 mb-8">
                        Deepsikha IT Consultancy LTD is a forward-thinking technology firm dedicated to building the next generation of digital infrastructure.
                    </p>

                    <div className="bg-cyber-dark/50 p-8 border border-cyber-cyan/20 rounded-lg mb-8">
                        <h2 className="text-2xl text-cyber-pink mb-4">CORPORATE_IDENTITY</h2>
                        <ul className="space-y-4 text-gray-400">
                            <li><strong className="text-white">Company Name:</strong> Deepsikha IT Consultancy LTD</li>
                            <li><strong className="text-white">Company ID:</strong> 16827360</li>
                            <li><strong className="text-white">Address:</strong> 1 Belmont Rd, St Andrew's, Bristol, United Kingdom, BS6 5AN</li>
                            <li><strong className="text-white">Phone:</strong> +44-7476963331</li>
                            <li><strong className="text-white">Email:</strong> hello@deepsikhaitconsultancy.info</li>
                        </ul>
                    </div>

                    <p className="text-gray-400">
                        We specialize in custom AI agents, process automation, and proprietary digital assets. Our mission is to empower businesses with autonomous systems that scale.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
