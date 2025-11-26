import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Image as ImageIcon } from 'lucide-react';

const caseStudies = [
    {
        id: 1,
        headline: 'AI Video Creation & Custom Avatar Studio',
        type: 'video',
        url: 'https://www.youtube.com/embed/UrfyxJ6SRI4',
        description: `This portfolio demonstrates my expertise as an AI video creator and AI video expert, delivering high-quality AI commercials, AI product videos, AI explainer videos, and AI promo videos designed for marketing impact.

Using advanced tools like Google Veo, Veo 3 video, Kling AI, and Heygen AI, I build professional AI avatars, AI talking head videos, AI presenters, AI spokespersons, and custom AI characters that look realistic, engaging, and brand-ready.`,
        services: [
            'AI cinematic videos, 3D AI video, AI trailers, and AI short social ads',
            'AI UGC videos, AI testimonial videos, and AI influencer-style content',
            'AI lip sync, AI dubbing, AI voiceover, and AI voice cloning for multilingual ads',
            'AI green screen, AI face swap, and AI animated spokespersons for creative campaigns',
            'Text-to-video, script-to-video, and photo-to-video workflows',
            'AI YouTube videos, AI story videos, AI interviews, and AI educational videos'
        ],
        tags: ['Heygen', 'Kling', 'Google Veo', 'AI Avatars', 'Cinematic Ads']
    },
    {
        id: 2,
        headline: 'AI Voice Booking Automation with Vapi + Make.com',
        type: 'image',
        url: 'https://prnt.sc/WgUdXAmqSveA',
        description: `This automation integrates a Vapi AI voice agent with a complete scheduling workflow in Make.com. Incoming calls are handled by the AI, which qualifies leads, checks availability, books appointments, and triggers instant follow-ups. The system also sends confirmations and reminders via SMS/email, ensuring higher show-up rates and zero missed opportunities.`,
        features: [
            'AI Voice Agent (Vapi): Handles inbound calls, qualifies leads, initiates bookings',
            'Automated Scheduling: Creates appointments in real time',
            'Follow-Up Sequences: SMS, email, or WhatsApp reminders',
            'Multi-System Integration: Connects with CRMs and calendars',
            'Analytics & Reporting: Tracks activity inside Make.com'
        ],
        benefits: [
            'Save hours of manual scheduling',
            'Increase conversion rates',
            'Reduce missed appointments',
            '24/7 professional booking experience'
        ],
        tags: ['n8n', 'Vapi', 'Make.com', 'Voice AI', 'SMS Automation', 'CRM']
    },
    {
        id: 3,
        headline: 'n8n Social Media Auto-Posting Workflow',
        type: 'image',
        url: 'https://prnt.sc/BywSfagOUS7p',
        description: `A fully automated content distribution system: simply add new content in Google Sheets and it posts instantly to Facebook, Twitter (X), and LinkedIn in the right format. Saves hours of manual posting and keeps your brand consistent across platforms.`,
        highlights: [
            'n8n social media auto-posting',
            'n8n Google Sheets integration',
            'n8n workflow automation',
            'n8n API request workflows',
            'n8n lead generation & data syncing'
        ],
        tags: ['n8n', 'Google Sheets', 'Social Media Automation', 'API Integration']
    }
];

const CaseStudies: React.FC = () => {
    return (
        <section id="case-studies" className="py-20 bg-cyber-black relative border-t border-cyber-cyan/10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
                        <span className="text-cyber-purple">03.</span> CASE_STUDIES
                    </h2>
                    <div className="h-1 w-20 bg-cyber-cyan" />
                </div>

                <div className="space-y-20">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                        >
                            {/* Visual Content */}
                            <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="relative rounded-lg overflow-hidden border border-cyber-cyan/30 shadow-[0_0_30px_rgba(0,243,255,0.1)] bg-cyber-dark/50 group">
                                    {study.type === 'video' ? (
                                        <div className="aspect-video w-full">
                                            <iframe
                                                src={study.url}
                                                title={study.headline}
                                                className="w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                    ) : (
                                        <div className="aspect-video w-full flex flex-col items-center justify-center p-8 bg-grid-pattern relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-cyber-black/80 to-cyber-dark/80" />
                                            <div className="relative z-10 text-center">
                                                <ImageIcon className="w-16 h-16 text-cyber-cyan mb-4 mx-auto opacity-50" />
                                                <h3 className="text-xl font-mono font-bold text-white mb-6">WORKFLOW_DIAGRAM</h3>
                                                <a
                                                    href={study.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-all font-mono font-bold rounded"
                                                >
                                                    <ExternalLink className="w-4 h-4" /> VIEW_FULL_IMAGE
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''} font-mono`}>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                                    {study.headline}
                                </h3>

                                <div className="prose prose-invert prose-sm mb-8 text-gray-400">
                                    <p className="whitespace-pre-line">{study.description}</p>
                                </div>

                                {study.services && (
                                    <div className="mb-8">
                                        <h4 className="text-cyber-cyan font-bold mb-3 uppercase text-sm">Services Delivered</h4>
                                        <ul className="grid grid-cols-1 gap-2 text-sm text-gray-400">
                                            {study.services.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="text-cyber-pink mt-1">▹</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {study.features && (
                                    <div className="mb-8">
                                        <h4 className="text-cyber-cyan font-bold mb-3 uppercase text-sm">Key Features</h4>
                                        <ul className="grid grid-cols-1 gap-2 text-sm text-gray-400">
                                            {study.features.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="text-cyber-pink mt-1">▹</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {study.highlights && (
                                    <div className="mb-8">
                                        <h4 className="text-cyber-cyan font-bold mb-3 uppercase text-sm">System Highlights</h4>
                                        <ul className="grid grid-cols-1 gap-2 text-sm text-gray-400">
                                            {study.highlights.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="text-cyber-pink mt-1">▹</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-2 mt-8">
                                    {study.tags.map(tag => (
                                        <span key={tag} className="text-xs font-bold text-cyber-black bg-cyber-cyan px-2 py-1 rounded opacity-80">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
