import React from 'react';
import { Mail, FileText, Github, Linkedin, Twitter, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full mt-32 pb-12 flex flex-col items-center">
            <div className="w-full h-px bg-white/5 mb-12" />

            <h2 className="text-4xl font-bold text-[#fafafa] mb-6 tracking-tight">Let's connect!</h2>
            <p className="text-[#a1a1aa] text-center max-w-lg mb-10 text-sm leading-relaxed">
                Appreciate you stopping by. If a project sparked something or you just want to jam on builds, drop me a line.
            </p>

            <div className="text-center mb-16">
                <p className="text-xl font-medium text-[#d4d4d8] mb-8">
                    Always keen to collaborate, learn, and ship new ideas.
                </p>

                <div className="flex gap-4 justify-center">
                    <a href="mailto:email@example.com" className="flex items-center gap-2 px-6 py-3 bg-[#09090b] hover:bg-[#27272a] border border-white/10 hover:border-white/20 rounded-md transition-all text-[#fafafa] font-medium shadow-lg hover:shadow-xl">
                        <Mail size={16} />
                        <span>Email Me</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 px-6 py-3 bg-[#09090b] hover:bg-[#27272a] border border-white/10 hover:border-white/20 rounded-md transition-all text-[#fafafa] font-medium shadow-lg hover:shadow-xl">
                        <FileText size={16} />
                        <span>Resume</span>
                    </a>
                </div>
            </div>

            <div className="w-full h-px bg-white/5 mb-8" />

            {/* Bottom Links */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-[#71717a] font-medium">
                <a href="mailto:email@example.com" className="flex items-center gap-2 hover:text-[#fafafa] transition-colors">
                    <Mail size={14} />
                    <span>Mail</span>
                </a>
                <a href="https://github.com/senhajiiahmed" className="flex items-center gap-2 hover:text-[#fafafa] transition-colors">
                    <Github size={14} />
                    <span>Github</span>
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-[#fafafa] transition-colors">
                    <Twitter size={14} />
                    <span>Twitter</span>
                </a>
                <a href="https://www.linkedin.com/in/senhajiiahmed" className="flex items-center gap-2 hover:text-[#fafafa] transition-colors">
                    <Linkedin size={14} />
                    <span>Linkedin</span>
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-[#fafafa] transition-colors">
                    <Code2 size={14} />
                    <span>LeetCode</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
