import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Workflow, Brain, Code2 } from 'lucide-react';

const services = [
    {
        icon: <Bot className="w-8 h-8" />,
        title: 'AI AGENT DEVELOPMENT',
        description: 'Autonomous digital workers designed to handle complex workflows and decision making.'
    },
    {
        icon: <Workflow className="w-8 h-8" />,
        title: 'PROCESS AUTOMATION',
        description: 'End-to-end business logic automation using n8n, Make, and custom Python scripts.'
    },
    {
        icon: <Brain className="w-8 h-8" />,
        title: 'LLM INTEGRATION',
        description: 'Seamless integration of GPT-4, Claude, and open-source models into your existing stack.'
    },
    {
        icon: <Code2 className="w-8 h-8" />,
        title: 'CUSTOM ARCHITECTURE',
        description: 'Scalable, secure, and future-proof technical infrastructure for AI-first companies.'
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
                        <span className="text-cyber-cyan">01.</span> CORE_CAPABILITIES
                    </h2>
                    <div className="h-1 w-20 bg-cyber-pink" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 border border-cyber-cyan/20 bg-cyber-dark/50 hover:bg-cyber-cyan/5 transition-all duration-300"
                        >
                            <div className="absolute top-0 left-0 w-1 h-0 bg-cyber-cyan group-hover:h-full transition-all duration-300" />
                            <div className="mb-6 text-cyber-cyan group-hover:text-cyber-pink transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-mono font-bold text-white mb-4 group-hover:text-cyber-cyan transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
