import React, { useState, useEffect } from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

const Header: React.FC = () => {
    const [time, setTime] = useState<string>('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm tracking-wide mb-16">
            {/* Time and Location */}
            <div className="flex flex-col items-center md:items-start text-[#d4d4d8]">
                <span className="font-semibold text-[#fafafa] text-base mb-0.5">{time}</span>
                <span className="text-xs font-medium opacity-80">GMT +1 • Rabat, Morocco</span>
            </div>

            <div className="flex items-center gap-3">
                <a href="https://github.com/senhajiiahmed" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-md transition-all duration-300 text-[#d4d4d8] hover:text-[#fafafa]">
                    <Github size={16} />
                    <span className="font-medium">Github</span>
                </a>
                <a href="https://www.linkedin.com/in/senhajiiahmed" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-md transition-all duration-300 text-[#d4d4d8] hover:text-[#fafafa]">
                    <Linkedin size={16} />
                    <span className="font-medium">Linkedin</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-md transition-all duration-300 text-[#d4d4d8] hover:text-[#fafafa]">
                    <FileText size={16} />
                    <span className="font-medium">Resume</span>
                </a>
            </div>
        </header>
    );
};

export default Header;
