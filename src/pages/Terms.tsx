import React from 'react';

const Terms: React.FC = () => {
    return (
        <div className="pt-20 min-h-screen bg-cyber-black text-white px-4">
            <div className="max-w-4xl mx-auto py-12 font-mono">
                <h1 className="text-3xl md:text-5xl font-bold text-cyber-cyan mb-8">TERMS_AND_CONDITIONS</h1>
                <div className="space-y-6 text-gray-400">
                    <p>Last Updated: November 2025</p>
                    <p>Welcome to Deepsikha IT Consultancy LTD.</p>

                    <h2 className="text-xl text-white mt-8 mb-4">1. Introduction</h2>
                    <p>These terms and conditions outline the rules and regulations for the use of Deepsikha IT Consultancy LTD's Website.</p>

                    <h2 className="text-xl text-white mt-8 mb-4">2. Company Details</h2>
                    <p>Deepsikha IT Consultancy LTD is registered in the United Kingdom.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Company ID: 16827360</li>
                        <li>Address: 1 Belmont Rd, St Andrew's, Bristol, United Kingdom, BS6 5AN</li>
                    </ul>

                    <h2 className="text-xl text-white mt-8 mb-4">3. Services</h2>
                    <p>We provide IT consultancy, AI agent development, and automation services. All services are subject to a separate service agreement.</p>

                    <h2 className="text-xl text-white mt-8 mb-4">4. Digital Products</h2>
                    <p>Products purchased through our shop (e.g., Prompts, Automations) are licensed for individual or business use as specified at purchase. Redistribution is strictly prohibited.</p>
                </div>
            </div>
        </div>
    );
};

export default Terms;
