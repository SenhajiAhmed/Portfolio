import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: "Heart Disease Prediction",
        problem: "Clinical risk assessment is slow with incomplete patient data.",
        metric: "ROC-AUC 0.91",
        tech: ["Streamlit", "Power BI", "Python"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070",
    },
    {
        title: "Spotify Analytics Pipeline",
        problem: "Processing high-volume audio stream metadata in real-time.",
        metric: "< 500ms Latency",
        tech: ["Kafka", "Airflow", "Snowflake", "DBT"],
        image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?auto=format&fit=crop&q=80&w=2074",
    },
    {
        title: "Vendor IQ",
        problem: "Identifying pricing gaps across 500K+ disorganized vendor transactions.",
        metric: "$12k/mo Saved",
        tech: ["SQL", "Pandas", "Power BI", "Python"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    },
    {
        title: "Jobsy",
        problem: "Internship search is manually intensive and prone to stale listings.",
        metric: "98% Success Rate",
        tech: ["Python", "BS4", "Automation"],
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2072",
    },
];

const Projects: React.FC = () => {
    return (
        <section className="w-full mt-24 mb-24 relative">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-12">
                <span className="text-4xl text-[#27272a] font-bold select-none">01</span>
                <div>
                    <h2 className="text-2xl font-bold text-[#fafafa]">Signals I've Built</h2>
                    <p className="text-sm text-[#a1a1aa] md:max-w-md mt-1">
                        Systems designed for clarity, efficiency, and impact.
                    </p>
                </div>
            </div>

            {/* Central Vertical Line */}
            <div className="hidden md:block absolute top-[100px] bottom-0 left-1/2 w-px -ml-[0.5px] bg-transparent border-r border-dashed border-white/5 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
