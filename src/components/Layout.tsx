import React from 'react';
import StarryBackground from './Background';
import { motion } from 'framer-motion';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="relative min-h-screen text-[#fafafa] font-sans antialiased overflow-x-hidden selection:bg-blue-500/30">
            <StarryBackground />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-6xl mx-auto border-l border-r border-dashed border-white/10 min-h-screen"
            >
                <div className="px-4 md:px-8 py-8 flex flex-col">
                    {children}
                </div>
            </motion.div>
        </div>
    );
};

export default Layout;
