import React from 'react';

const Privacy: React.FC = () => {
    return (
        <div className="pt-20 min-h-screen bg-cyber-black text-white px-4">
            <div className="max-w-4xl mx-auto py-12 font-mono">
                <h1 className="text-3xl md:text-5xl font-bold text-cyber-purple mb-8">PRIVACY_POLICY</h1>
                <div className="space-y-6 text-gray-400">
                    <p>Deepsikha IT Consultancy LTD respects your privacy and is committed to protecting your personal data.</p>

                    <h2 className="text-xl text-white mt-8 mb-4">1. Data Collection</h2>
                    <p>We collect personal data you provide to us, such as name, email address, and phone number when you contact us or purchase products.</p>

                    <h2 className="text-xl text-white mt-8 mb-4">2. Use of Data</h2>
                    <p>We use your data to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Process orders and deliver products.</li>
                        <li>Respond to your inquiries.</li>
                        <li>Improve our services.</li>
                    </ul>

                    <h2 className="text-xl text-white mt-8 mb-4">3. Contact Details</h2>
                    <p>For any privacy-related questions, please contact:</p>
                    <p className="text-white">Deepsikha IT Consultancy LTD</p>
                    <p>1 Belmont Rd, St Andrew's, Bristol, United Kingdom, BS6 5AN</p>
                    <p>Email: hello@deepsikhaitconsultancy.info</p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
