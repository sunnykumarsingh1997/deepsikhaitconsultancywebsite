import React, { useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Shop from '../components/Shop';
import ContactModal from '../components/ContactModal';

const Home: React.FC = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <>
            <Hero />
            <Services />
            <CaseStudies />
            <Shop />

            <section id="contact" className="py-20 bg-cyber-black text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-mono font-bold text-white mb-8">
                        READY TO <span className="text-cyber-green">UPGRADE</span>?
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Initiate protocol 88. Contact our neural network for immediate assistance.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="px-8 py-4 bg-cyber-cyan text-black font-bold font-mono rounded hover:bg-white transition-all hover:scale-105"
                        >
                            OPEN_COMM_CHANNEL
                        </button>

                        <a href="mailto:hello@deepsikhaitconsultancy.info" className="text-sm font-mono text-gray-500 hover:text-cyber-cyan transition-colors mt-4">
                            OR EMAIL DIRECTLY: hello@deepsikhaitconsultancy.info
                        </a>
                    </div>
                </div>
            </section>

            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
        </>
    );
};

export default Home;
