import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Zap, Book, Database, Bot } from 'lucide-react';
import ContactModal from './ContactModal';

const products = [
    {
        id: 1,
        title: '200 Nano Banana Prompts',
        price: '$49.99',
        icon: <Zap className="w-12 h-12 text-yellow-400" />,
        description: 'High-velocity prompt engineering patterns for micro-optimizations.',
        tags: ['PROMPTS', 'AI', 'NANO']
    },
    {
        id: 2,
        title: '4000 n8n automations',
        price: '$199.00',
        icon: <Database className="w-12 h-12 text-cyber-pink" />,
        description: 'The ultimate library of pre-built workflows for every possible business scenario.',
        tags: ['AUTOMATION', 'N8N', 'WORKFLOWS']
    },
    {
        id: 3,
        title: 'VEO 3 BIBLE',
        price: '$999.00',
        icon: <Book className="w-12 h-12 text-cyber-purple" />,
        description: 'The sacred text of VEO 3 architecture. Only for the initiated.',
        tags: ['MANUAL', 'SECRET', 'VEO3']
    },
    {
        id: 4,
        title: 'Custom AI Agent',
        price: '$2,500',
        icon: <Bot className="w-12 h-12 text-cyber-cyan" />,
        description: 'Custom AI Agent training, Voice AI, and Email Automation. Boost sales and simplify business automation with moderate-level customizations.',
        tags: ['AI AGENT', 'VOICE', 'AUTOMATION']
    }
];

const Shop: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

    return (
        <section id="shop" className="py-20 bg-cyber-dark/30 border-y border-cyber-cyan/10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-16 text-right">
                    <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
                        <span className="text-cyber-pink">02.</span> PROPRIETARY_ASSETS
                    </h2>
                    <div className="h-1 w-20 bg-cyber-cyan ml-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group bg-cyber-black border border-gray-800 hover:border-cyber-pink/50 transition-all duration-300 overflow-hidden flex flex-col"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-cyber-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="p-8 flex flex-col h-full relative z-10">
                                <div className="mb-6 bg-cyber-dark/50 w-20 h-20 rounded-full flex items-center justify-center border border-gray-700 group-hover:border-cyber-pink transition-colors">
                                    {product.icon}
                                </div>

                                <h3 className="text-2xl font-mono font-bold text-white mb-2 group-hover:text-cyber-pink transition-colors">
                                    {product.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {product.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono text-cyber-cyan bg-cyber-cyan/10 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-400 mb-8 flex-grow">
                                    {product.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-800">
                                    <span className="text-2xl font-mono font-bold text-white">{product.price}</span>
                                    <button
                                        onClick={() => setSelectedProduct(product.title)}
                                        className="flex items-center gap-2 bg-white text-black px-4 py-2 font-mono font-bold hover:bg-cyber-pink hover:text-white transition-colors text-sm"
                                    >
                                        <ShoppingCart className="w-4 h-4" /> SUBMIT_REQUEST
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ContactModal
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                productName={selectedProduct || ''}
            />
        </section>
    );
};

export default Shop;
