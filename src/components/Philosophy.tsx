import React from 'react';
import { GitCommit, Cpu, Zap } from 'lucide-react';

const beliefs = [
    {
        icon: <Cpu size={20} />,
        title: "Simple > Clever",
        desc: "Complexity is debt. I prioritize maintainable, readable code over clever one-liners."
    },
    {
        icon: <Zap size={20} />,
        title: "Shipping > Perfecting",
        desc: "Real user feedback beats theoretical perfection. Deploy early, iterate often."
    },
    {
        icon: <GitCommit size={20} />,
        title: "Data > Opinion",
        desc: "Decisions should be backed by metrics, not just intuition. Measure everything."
    }
];

const Philosophy: React.FC = () => {
    return (
        <section className="w-full mt-24 mb-24">
            <div className="flex items-center gap-4 mb-12">
                <span className="text-4xl text-[#27272a] font-bold select-none">02</span>
                <div>
                    <h2 className="text-2xl font-bold text-[#fafafa]">System Beliefs</h2>
                    <p className="text-sm text-[#a1a1aa] md:max-w-md mt-1">
                        Engineering tradeoffs I make by default.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {beliefs.map((item, idx) => (
                    <div
                        key={idx}
                        className="p-6 bg-[#09090b] border border-white/5 rounded-lg group hover:border-white/10 transition-colors"
                    >
                        <div className="mb-4 text-[#52525b] group-hover:text-blue-400 transition-colors">
                            {item.icon}
                        </div>
                        <h3 className="text-[#fafafa] font-bold mb-2 font-mono text-sm uppercase tracking-wider">
                            {item.title}
                        </h3>
                        <p className="text-[#a1a1aa] text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Philosophy;
