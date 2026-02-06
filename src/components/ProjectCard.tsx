import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Layers, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    problem: string;
    metric: string;
    tech: string[];
    image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, problem, metric, tech, image }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative bg-[#09090b] border border-white/10 rounded-lg overflow-hidden hover:border-blue-500/30 transition-all duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Section / Overlay */}
            <div className="h-48 overflow-hidden relative border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent z-10" />

                {/* Tech Schematic Overlay on Hover */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 z-20 bg-[#09090b]/90 flex items-center justify-center p-6 backdrop-blur-sm"
                >
                    <div className="grid grid-cols-2 gap-4 w-full text-center">
                        <div className="flex flex-col items-center gap-1">
                            <Cpu className="text-blue-400 mb-1" size={20} />
                            <span className="text-[10px] text-[#71717a] font-mono uppercase">Processing</span>
                            <span className="text-xs text-[#d4d4d8] font-mono">Real-time</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <Layers className="text-purple-400 mb-1" size={20} />
                            <span className="text-[10px] text-[#71717a] font-mono uppercase">Architecture</span>
                            <span className="text-xs text-[#d4d4d8] font-mono">Microservices</span>
                        </div>
                    </div>
                    {/* Animated Grid Lines */}
                    <div className="absolute inset-0 border border-blue-500/10 border-dashed m-2 rounded opacity-50" />
                </motion.div>

                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out opacity-60 group-hover:opacity-40"
                />

                <div className="absolute top-4 right-4 z-30">
                    <span className="px-2 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-blue-400 flex items-center gap-1">
                        <Activity size={10} />
                        SIGNAL_DETECTED
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col h-[240px]">
                <div className="mb-auto">
                    <h3 className="text-xl font-bold text-[#fafafa] mb-2 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                        {title}
                    </h3>
                    <p className="text-[#a1a1aa] text-sm leading-relaxed mb-4 font-normal">
                        <span className="text-blue-400/60 font-mono text-xs mr-2">{'>'}</span>
                        {problem}
                    </p>
                </div>

                {/* Metric & Tech */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 py-2 border-y border-white/5">
                        <span className="text-[10px] uppercase tracking-wider text-[#71717a] font-bold">Performance</span>
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-400/5 px-2 py-0.5 rounded border border-emerald-400/10">
                            {metric}
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-2 text-[10px] font-mono text-[#71717a]">
                        {tech.map((t, i) => (
                            <span key={i}>
                                {t}{i < tech.length - 1 && <span className="text-[#3f3f46] mx-1">/</span>}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="text-[#d4d4d8]" size={18} />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
