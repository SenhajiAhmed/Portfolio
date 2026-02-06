import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Experience: React.FC = () => {
    return (
        <section className="w-full mt-12 mb-12">
            <h2 className="text-2xl font-bold text-[#fafafa] mb-12 flex items-center gap-3">
                Education & Certifications
            </h2>

            <div className="relative border-l border-white/10 ml-3 pl-12 py-2 space-y-12">
                {/* INSEA */}
                <div className="relative group">
                    <div className="absolute -left-[55px] top-1.5 w-3 h-3 rounded-sm bg-[#09090b] border border-white/30 group-hover:border-blue-400 group-hover:bg-blue-400/20 transition-colors duration-300" />

                    <h3 className="text-lg font-bold text-[#fafafa] mb-1">Institut National de Statistique et d'Economie Appliquée (INSEA)</h3>
                    <div className="flex items-center gap-2 text-sm text-[#a1a1aa] mb-4">
                        <span className="text-blue-400 font-medium">Diplôme d'ingénieur d'état</span>
                        <span>•</span>
                        <span>Oct 2024 - Present</span>
                    </div>

                    <ul className="list-disc list-outside text-[#d4d4d8] space-y-2 ml-4 text-sm leading-relaxed marker:text-[#52525b]">
                        <li>Major in Data Science & Artificial Intelligence.</li>
                        <li>Relevant Coursework: Machine Learning, Deep Learning, Probability & Statistics.</li>
                    </ul>
                </div>

                {/* CPGE */}
                <div className="relative group">
                    <div className="absolute -left-[55px] top-1.5 w-3 h-3 rounded-sm bg-[#09090b] border border-white/30 group-hover:border-blue-400 group-hover:bg-blue-400/20 transition-colors duration-300" />

                    <h3 className="text-lg font-bold text-[#fafafa] mb-1">CPGE - Classes Préparatoires aux Grandes Écoles</h3>
                    <div className="flex items-center gap-2 text-sm text-[#a1a1aa] mb-4">
                        <span className="text-blue-400 font-medium">MPSI / MP</span>
                        <span>•</span>
                        <span>Sep 2022 - Jun 2024</span>
                    </div>

                    <p className="text-[#d4d4d8] text-sm leading-relaxed">
                        Intensive two-year program preparing for national competitive entrance exams to French and Moroccan engineering schools. Focus on advanced Mathematics and Physics.
                    </p>
                </div>

                {/* Certifications */}
                <div className="relative group">
                    <div className="absolute -left-[55px] top-1.5 w-3 h-3 rounded-sm bg-[#09090b] border border-white/30 group-hover:border-green-400 group-hover:bg-green-400/20 transition-colors duration-300" />

                    <h3 className="text-lg font-bold text-[#fafafa] mb-1 flex items-center gap-2">
                        <Award size={16} className="text-yellow-500" />
                        Certifications
                    </h3>

                    <div className="mt-4 space-y-3">
                        <div className="flex flex-col gap-1">
                            <span className="text-[#d4d4d8] text-sm font-medium">Fundamentals of Deep Learning</span>
                            <span className="text-[#a1a1aa] text-xs">NVIDIA Deep Learning Institute</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[#d4d4d8] text-sm font-medium">Python for Deep Learning: Build Neural Networks</span>
                            <span className="text-[#a1a1aa] text-xs">Udemy / Coursera</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
