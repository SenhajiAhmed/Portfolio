import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: "Real-Time Fraud Detection",
        problem: "Financial losses due to undetected fraudulent transactions in high-velocity streams.",
        metric: "99.8% Recall < 200ms",
        tech: ["Python", "Scikit-learn", "Kafka", "Redis"],
        image: "/FraudDetection.png", // Local project image
    },
    {
        title: "Arabic Music Recognition",
        problem: "Classifying complex regional Arabic musical scales (Maqam) from raw audio data.",
        metric: "94% Accuracy (CNN)",
        tech: ["Deep Learning", "Librosa", "TensorFlow", "CNN"],
        image: "/ArabicMusicRecognition.png", // Local project image
    },
    {
        title: "Insta-Scraper",
        problem: "Manual data collection from social media is inefficient and prone to rate limits.",
        metric: "50k+ Records/Hr",
        tech: ["Python", "Selenium", "Docker", "Proxy Rotation"],
        image: "/INSTASCRAPER.png", // Local project image
    },
    {
        title: "LinkedIn Automator",
        problem: "Repetitive manual job applications waste valuable engineering time.",
        metric: "500+ Apps/Week",
        tech: ["Python", "Selenium", "ChromeDP", "Automation"],
        image: "/linkedin.png", // Local project image
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
