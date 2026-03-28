import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MediaDisplay from './MediaDisplay';
import TextContent from './TextContent';
import Pagination from './Pagination';

export default function Slider({ slides, activeIndex, onNext }) {
    const activeSlide = slides[activeIndex];

    return (
        <motion.div
            className={`relative w-full min-h-screen flex flex-col items-center justify-between p-6 overflow-hidden transition-colors duration-700 ease-in-out ${activeSlide.bgColor}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Top Header / Nav Placeholder if needed */}
            <header className="w-full max-w-md pt-8 pb-4 flex justify-center">
                <div className="h-2 w-16 bg-black/10 rounded-full" />
            </header>

            {/* Main Content Area */}
            <main className="w-full max-w-md flex-1 flex flex-col items-center justify-center gap-12 z-10">

                {/* Media / Video component */}
                <AnimatePresence mode="wait">
                    <MediaDisplay key={`media-${activeSlide.id}`} slide={activeSlide} />
                </AnimatePresence>

                {/* Text Container */}
                <AnimatePresence mode="wait">
                    <TextContent key={`text-${activeSlide.id}`} slide={activeSlide} />
                </AnimatePresence>

                {/* Action Button */}
                <motion.button
                    onClick={onNext}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gray-900 text-white font-semibold py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                    {activeIndex === slides.length - 1 ? "Get Started" : "Continue"}
                </motion.button>

            </main>

            {/* Pagination */}
            <footer className="w-full max-w-md pb-8 pt-6 flex justify-center">
                <Pagination total={slides.length} current={activeIndex} />
            </footer>
        </motion.div>
    );
}
