import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, image }) => {
    return (
        <div className="group relative bg-[#09090b] border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50">
            {/* Image Section */}
            <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/20 to-transparent z-10 opacity-90 transition-opacity duration-500 group-hover:opacity-60" />
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute bottom-4 left-6 z-20">
                    <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase mb-2 block font-sans">Featured Project</span>
                    <h3 className="text-2xl font-bold text-[#fafafa] tracking-tight group-hover:text-white transition-colors">{title}</h3>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 pt-4">
                <p className="text-[#a1a1aa] text-sm leading-relaxed mb-8 line-clamp-3">
                    {description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-[11px] font-medium text-[#d4d4d8]">
                                {tag}
                            </span>
                        ))}
                        {tags.length > 3 && (
                            <span className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-[11px] font-medium text-[#d4d4d8]">
                                +{tags.length - 3}
                            </span>
                        )}
                    </div>

                    {/* Link */}
                    <button className="flex items-center gap-2 text-xs font-medium text-[#d4d4d8] group-hover:text-white transition-colors">
                        View Details <ArrowUpRight size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
