import React from 'react';
import { motion } from 'framer-motion';


const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-grid-pattern">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-black/50 to-cyber-black pointer-events-none" />

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-cyber-cyan font-mono text-sm md:text-base mb-4 tracking-widest">
                        SYSTEM STATUS: ONLINE
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-mono mb-6 tracking-tighter leading-none">
                        <span className="block text-white mb-2">FUTURE IS</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-pink animate-pulse-slow">
                            NOW_LOADING
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-mono">
                        We build custom AI agents and automation architectures for the next generation of digital entities.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 bg-cyber-cyan text-cyber-black font-bold font-mono rounded hover:bg-cyber-white transition-all hover:scale-105 border border-cyber-cyan shadow-[0_0_20px_rgba(0,243,255,0.3)]">
                            DEPLOY_AGENT
                        </button>
                        <button className="px-8 py-4 bg-transparent text-cyber-pink font-bold font-mono rounded border border-cyber-pink hover:bg-cyber-pink/10 transition-all hover:scale-105">
                            VIEW_PROTOCOLS
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Abstract Background Elements */}
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-cyber-purple/20 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px] animate-pulse-slow" />
        </section>
    );
};

export default Hero;
