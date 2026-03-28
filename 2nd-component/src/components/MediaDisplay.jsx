import React from 'react';
import { motion } from 'framer-motion';

export default function MediaDisplay({ slide }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -30 }} // Scale up slightly on exit for a pop effect
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative w-full max-w-sm aspect-square bg-white/20 backdrop-blur-xl rounded-[3rem] shadow-2xl overflow-hidden flex items-center justify-center border border-white/50 group"
        >
            {/* Background glow effect to simulate lighting */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none mix-blend-overlay"></div>

            {/* Actual video element placeholder */}
            {slide.videoSrc ? (
                <video
                    src={slide.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
            ) : (
                <div className="relative z-10 text-center p-6 text-gray-900 font-medium">
                    <p className="text-lg opacity-80">{slide.placeholderText}</p>
                    <div className="mt-4 inline-flex px-4 py-2 rounded-xl bg-black/5 border border-black/10 text-sm opacity-60">
                        [Insert Video File]
                    </div>
                </div>
            )}
        </motion.div>
    );
}
