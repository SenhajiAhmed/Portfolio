import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full mt-32 pb-12 flex flex-col items-center">

            <div className="flex flex-col items-center text-center gap-6 mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-[#fafafa] tracking-tight max-w-2xl leading-tight">
                    If you speak data,<br />
                    <span className="text-blue-500">let's talk signals.</span>
                </h2>
                <a
                    href="mailto:email@example.com"
                    className="group flex items-center gap-3 px-6 py-3 bg-[#09090b] border border-white/10 hover:border-blue-500/50 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                >
                    <Mail size={16} className="text-[#a1a1aa] group-hover:text-white transition-colors" />
                    <span className="text-sm font-medium text-[#d4d4d8] group-hover:text-white">Initialize Communication</span>
                    <ArrowRight size={16} className="text-[#a1a1aa] group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>
            </div>

            <div className="w-full flex justify-between items-end border-t border-dashed border-white/5 pt-8">
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#52525b] font-bold">Status</span>
                    <span className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        System Online
                    </span>
                </div>

                <div className="text-right">
                    <p className="text-[10px] text-[#52525b] font-mono">
                        © 2026 Ahmed Senhaji. <br />
                        Built with React, Tailwind, & Motion.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
