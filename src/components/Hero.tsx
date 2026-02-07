import React, { useState, useEffect } from 'react';
import { Mail, ExternalLink, BadgeCheck, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = ["Pipelines", "Models", "Systems", "Intelligence"];

const Hero: React.FC = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full flex flex-col items-center gap-6 mb-8">
            {/* Profile Card */}
            <div className="w-full max-w-3xl bg-[#09090b] border border-white/10 rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center relative overflow-hidden backdrop-blur-sm group hover:border-white/20 transition-colors duration-500">

                {/* Profile Image */}
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-md overflow-hidden bg-gray-800 flex-shrink-0 border border-white/10 shadow-xl relative">
                    <img
                        src="/profile.png"
                        alt="Ahmed Senhaji"
                        className="w-full h-full object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                        <h1 className="text-2xl md:text-3xl font-bold text-[#fafafa] tracking-tight flex items-center gap-2">
                            Ahmed Senhaji
                            <BadgeCheck size={20} className="text-blue-500 fill-blue-500/10" />
                        </h1>
                        <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded-full border border-emerald-500/20 uppercase tracking-wider flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Signal Active
                        </span>
                    </div>

                    <div className="h-8 mb-4 flex items-center justify-center md:justify-start overflow-hidden">
                        <span className="text-[#d4d4d8] text-sm md:text-base font-medium mr-1.5">Building</span>
                        <AnimatePresence mode='wait'>
                            <motion.span
                                key={roleIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-blue-400 font-mono text-sm md:text-base font-bold"
                            >
                                {roles[roleIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6 max-w-lg">
                        Turning noisy data into clear decisions.
                        Engineering robust AI systems that survive production.
                        <span className="text-[#71717a] block mt-1 font-mono text-xs">Based in Rabat · Shipping Globally</span>
                    </p>

                    <div className="flex items-center gap-4">
                        <a href="mailto:email@example.com" className="flex items-center gap-2 text-sm text-[#d4d4d8] hover:text-white transition-colors font-medium group/btn">
                            <Mail size={16} className="text-blue-400 group-hover/btn:scale-110 transition-transform" />
                            <span>Contact Channel</span>
                        </a>
                    </div>
                </div>

                {/* Top Right Icons */}
                <div className="absolute top-4 right-4 flex gap-2">
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-[#71717a] font-mono">
                        <Terminal size={12} />
                        <span>v2.4.0</span>
                    </div>
                    <button className="p-2 hover:bg-white/10 rounded-md text-[#71717a] hover:text-[#fafafa] transition-colors">
                        <X size={18} />
                    </button>
                </div>
            </div>

            {/* Current Status */}
            <a href="#" className="flex items-center gap-3 px-5 py-2.5 bg-[#18181b] hover:bg-[#27272a] border border-white/10 rounded-full transition-all group width-auto">
                <div className="relative flex justify-center items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div className="absolute w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                </div>
                <span className="text-sm font-mono text-[#d4d4d8] group-hover:text-[#fafafa] tracking-tight">System Status: Training Models</span>
                <ExternalLink size={14} className="text-[#71717a] group-hover:text-[#fafafa] transition-colors" />
            </a>
        </section>
    );
};

export default Hero;
