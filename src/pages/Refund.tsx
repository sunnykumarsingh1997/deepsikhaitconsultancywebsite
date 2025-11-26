import React from 'react';

const Refund: React.FC = () => {
    return (
        <div className="pt-20 min-h-screen bg-cyber-black text-white px-4">
            <div className="max-w-4xl mx-auto py-12 font-mono">
                <h1 className="text-3xl md:text-5xl font-bold text-cyber-pink mb-8">REFUND_POLICY</h1>
                <div className="space-y-6 text-gray-400">
                    <h2 className="text-xl text-white mt-8 mb-4">1. Digital Products</h2>
                    <p>Due to the nature of digital assets (prompts, automation workflows, guides), all sales are final. We do not offer refunds on digital products once the download link has been accessed.</p>

                    <h2 className="text-xl text-white mt-8 mb-4">2. Services</h2>
                    <p>Refunds for consultancy services are governed by the specific service agreement signed at the commencement of the project.</p>

                    <h2 className="text-xl text-white mt-8 mb-4">3. Contact</h2>
                    <p>If you have issues with a product file or believe there has been an error, please contact us at <a href="mailto:hello@deepsikhaitconsultancy.info" className="text-cyber-cyan">hello@deepsikhaitconsultancy.info</a>.</p>
                </div>
            </div>
        </div>
    );
};

export default Refund;
