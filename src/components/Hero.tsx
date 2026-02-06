import React from 'react';
import { Mail, Code, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="w-full flex flex-col items-center gap-6 mb-8">
            {/* Profile Card */}
            <div className="w-full bg-[#09090b] border border-white/10 rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start relative overflow-hidden backdrop-blur-sm group hover:border-white/20 transition-colors duration-500">

                {/* Profile Image */}
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-md overflow-hidden bg-gray-800 flex-shrink-0 border border-white/10 shadow-xl">
                    <img
                        src="/profile.png"
                        alt="Ahmed Senhaji"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-2xl md:text-3xl font-bold text-[#fafafa] tracking-tight">Ahmed Senhaji</h1>
                        <span className="bg-blue-500/10 text-blue-400 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-blue-500/20 uppercase tracking-wider">
                            Available
                        </span>
                    </div>

                    <h2 className="text-[#d4d4d8] text-sm md:text-base font-medium mb-4">Data Science Engineering Student at INSEA</h2>

                    <p className="text-[#a1a1aa] text-sm leading-relaxed mb-4 max-w-lg">
                        Engineering student specializing in AI & Data Science.
                        Passionate about Deep Learning, Neural Networks, and building intelligent systems.
                        Based in Rabat, Morocco.
                    </p>

                    <div className="flex items-center gap-4">
                        <a href="mailto:email@example.com" className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium">
                            <Mail size={14} />
                            <span>Contact Me</span>
                        </a>
                    </div>
                </div>

                {/* Top Right Icons */}
                <div className="absolute top-4 right-4 flex gap-2">
                    <button className="p-2 hover:bg-white/10 rounded-lg text-[#71717a] hover:text-[#fafafa] transition-colors">
                        <Code size={18} />
                    </button>
                </div>
            </div>

            {/* Current Project / Status */}
            <a href="#" className="flex items-center gap-3 px-5 py-2.5 bg-[#18181b] hover:bg-[#27272a] border border-white/10 rounded-full transition-all group width-auto">
                <div className="relative flex justify-center items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <div className="absolute w-2 h-2 rounded-full bg-green-500 animate-ping" />
                </div>
                <span className="text-sm font-medium text-[#d4d4d8] group-hover:text-[#fafafa]">Building something cool</span>
                <ExternalLink size={14} className="text-[#71717a] group-hover:text-[#fafafa] transition-colors" />
            </a>
        </section>
    );
};

export default Hero;
