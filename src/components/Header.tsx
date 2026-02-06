import React, { useState, useEffect } from 'react';
import { Github, Linkedin, FileText, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
    const [time, setTime] = useState<string>('');
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const NavLink = ({ href, icon: Icon, label, subLabel, id }: any) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-2 px-3 py-2 text-[#a1a1aa] hover:text-[#fafafa] transition-colors group"
            onMouseEnter={() => setHoveredLink(id)}
            onMouseLeave={() => setHoveredLink(null)}
        >
            <Icon size={16} />
            <span className="font-mono text-xs font-medium">{label}</span>

            {/* Hover Tooltip */}
            <AnimatePresence>
                {hoveredLink === id && subLabel && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-[#18181b] border border-white/10 rounded text-[10px] text-[#d4d4d8] whitespace-nowrap z-50 shadow-xl font-mono"
                    >
                        {subLabel}
                    </motion.div>
                )}
            </AnimatePresence>
        </a>
    );

    return (
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm tracking-wide mb-20 pt-4">
            {/* Time and Location */}
            <div className="flex flex-col items-center md:items-start text-[#71717a]">
                <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs text-[#d4d4d8]">{time}</span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider opacity-60">Rabat, Morocco</span>
            </div>

            {/* Smart Links */}
            <div className="flex items-center gap-1 bg-[#09090b]/50 border border-white/5 rounded-full px-2 py-1 backdrop-blur-md">
                <NavLink
                    href="https://github.com/senhajiahmed"
                    icon={Github}
                    label="GH"
                    subLabel="15 Repos · 3 Active"
                    id="gh"
                />
                <div className="w-px h-3 bg-white/10" />
                <NavLink
                    href="https://www.linkedin.com/in/senhajiiahmed"
                    icon={Linkedin}
                    label="LI"
                    subLabel="Connect Network"
                    id="li"
                />
                <div className="w-px h-3 bg-white/10" />
                <NavLink
                    href="#"
                    icon={FileText}
                    label="CV"
                    subLabel="Updated Jan 2026"
                    id="cv"
                />
            </div>

            {/* Cmd+K Hint (Visual only for now) */}
            <div className="hidden md:flex items-center gap-1 text-[10px] text-[#52525b] font-mono border border-white/5 px-2 py-1 rounded">
                <Command size={10} />
                <span>K</span>
            </div>
        </header>
    );
};

export default Header;
