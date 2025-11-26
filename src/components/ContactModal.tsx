import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, productName }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: productName ? `I am interested in acquiring: ${productName}` : ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send data to a backend/Supabase
        console.log('Form submitted:', formData);
        alert('Transmission received. We will contact you shortly.');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-cyber-dark border border-cyber-cyan/30 p-8 rounded-lg shadow-[0_0_50px_rgba(0,243,255,0.1)]"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <h2 className="text-2xl font-mono font-bold text-white mb-6">
                            {productName ? 'ACQUIRE_ASSET' : 'INITIATE_CONTACT'}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6 font-mono">
                            <div>
                                <label className="block text-sm text-cyber-cyan mb-2">IDENTIFIER (NAME)</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:border-cyber-cyan focus:outline-none transition-colors"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-cyber-cyan mb-2">COMM_CHANNEL (EMAIL)</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:border-cyber-cyan focus:outline-none transition-colors"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-cyber-cyan mb-2">TRANSMISSION (MESSAGE)</label>
                                <textarea
                                    rows={4}
                                    required
                                    className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:border-cyber-cyan focus:outline-none transition-colors"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-cyber-cyan text-black font-bold py-4 rounded hover:bg-white transition-colors flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" /> SEND_TRANSMISSION
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
