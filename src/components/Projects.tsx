import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: "Heart Disease Prediction",
        description: "Risk prediction with Streamlit and heart failure outcome analysis through a Power BI dashboard.",
        tags: ["Streamlit", "Power BI", "Python"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070",
    },
    {
        title: "Spotify Analytics Pipeline",
        description: "Real-time streaming pipeline for Spotify-style analytics using Kafka, Airflow, Snowflake, DBT, and Power BI.",
        tags: ["Kafka", "Airflow", "Snowflake", "DBT"],
        image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?auto=format&fit=crop&q=80&w=2074",
    },
    {
        title: "Vendor IQ",
        description: "Analytics platform identifying profitable vendors and pricing gaps. Processes 500K+ transactions to optimize margins and inventory.",
        tags: ["SQL", "Pandas", "Power BI", "Python"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    },
    {
        title: "Jobsy",
        description: "Automated Internship Scraper & Updater.",
        tags: ["Python", "Web Scraping", "Beautiful Soup"],
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2072",
    },
];

const Projects: React.FC = () => {
    return (
        <section className="w-full mt-12 mb-12 relative">
            {/* Central Vertical Line (visible on md+) */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px -ml-[0.5px] bg-transparent border-r border-dashed border-white/10 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
