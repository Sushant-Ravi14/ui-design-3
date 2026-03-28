import React from 'react';
import { motion } from 'framer-motion';

export default function TextContent({ slide }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
            className="max-w-xs sm:max-w-sm text-center min-h-[140px] flex flex-col justify-center"
        >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                {slide.title}
            </h2>
            <p className="text-lg text-gray-800/80 leading-relaxed font-medium">
                {slide.description}
            </p>
        </motion.div>
    );
}
