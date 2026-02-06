import React from 'react';
import { Database, Code, Terminal, Layers, Cpu, Globe, Brain, Network } from 'lucide-react';

const technologies = [
    { name: "Python", icon: <Code size={14} /> },
    { name: "TensorFlow", icon: <Brain size={14} /> },
    { name: "Deep Learning", icon: <Network size={14} /> },
    { name: "Neural Networks", icon: <Brain size={14} /> },
    { name: "Scikit-learn", icon: <Cpu size={14} /> },
    { name: "SQL", icon: <Database size={14} /> },
    { name: "Pandas", icon: <Layers size={14} /> },
    { name: "NumPy", icon: <Cpu size={14} /> },
    { name: "Matplotlib", icon: <Layers size={14} /> },
    { name: "Docker", icon: <Globe size={14} /> },
    { name: "Git", icon: <Terminal size={14} /> },
    { name: "VS Code", icon: <Terminal size={14} /> },
];

const TechStack: React.FC = () => {
    return (
        <section className="w-full mt-12 mb-12">
            <h2 className="text-2xl font-bold text-[#fafafa] mb-8">Stack & Skills</h2>
            <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 px-4 py-2 bg-[#09090b] border border-white/10 rounded-md text-xs font-medium text-[#d4d4d8] hover:bg-[#27272a] hover:text-[#fafafa] hover:border-white/20 transition-colors cursor-default shadow-sm"
                    >
                        {tech.icon}
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
