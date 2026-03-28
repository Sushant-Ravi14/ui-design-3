import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const collectibles = [
    {
        id: 1,
        title: 'Skilled Fingers Series',
        price: '0.855',
        number: '#209',
        bgColor: '#dcd7f9',
        img: '/skilled_fingers.png',
        alt: 'Hands threading a needle',
    },
    {
        id: 2,
        title: 'Vibrant Vibes Series',
        price: '0.209',
        number: '#808',
        bgColor: '#ddeef9',
        img: '/vibrant_vibes.png',
        alt: 'Retro cassette tape',
    },
];

/* ─────────────────────────────────────────────
   ROOT
───────────────────────────────────────────── */
export default function App() {
    return (
        /* Page background — subtle gradient so the phone pops */
        <div
            className="min-h-screen w-full flex items-center justify-center"
            style={{
                background: 'linear-gradient(135deg, #e0e7ff 0%, #f0f9ff 50%, #fdf2f8 100%)',
            }}
        >
            <PhoneMockup />
        </div>
    );
}

/* ─────────────────────────────────────────────
   PHONE SHELL
───────────────────────────────────────────── */
function PhoneMockup() {
    return (
        /* Outer phone body */
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="relative flex flex-col items-center"
            style={{ width: 375, height: 780 }}
        >
            {/* ── Drop shadow ── */}
            <div
                className="absolute inset-0 rounded-[52px] pointer-events-none"
                style={{
                    boxShadow:
                        '0 40px 100px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.12)',
                }}
            />

            {/* ── Phone bezel ── */}
            <div
                className="absolute inset-0 rounded-[52px] overflow-hidden"
                style={{
                    background: 'linear-gradient(160deg, #2a2a2e 0%, #1a1a1e 100%)',
                    padding: '3px',
                }}
            >
                {/* Inner chrome ring */}
                <div
                    className="w-full h-full rounded-[50px] overflow-hidden"
                    style={{ background: '#111114' }}
                >
                    {/* ── Screen ── */}
                    <div className="w-full h-full rounded-[50px] overflow-hidden bg-white relative">
                        {/* Status bar */}
                        <StatusBar />

                        {/* Dynamic Island */}
                        <div
                            className="absolute top-3 left-1/2 -translate-x-1/2 z-30 rounded-full bg-black"
                            style={{ width: 120, height: 34 }}
                        />

                        {/* Scrollable app content (starts below dynamic island + status)  */}
                        <div
                            className="absolute inset-0 overflow-y-auto overflow-x-hidden"
                            style={{ paddingTop: 58 }}
                        >
                            <CollectiblesScreen />
                        </div>

                        {/* Home indicator */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2 z-30 bg-white/80 backdrop-blur-sm">
                            <div className="w-28 h-[5px] bg-gray-900/20 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Side buttons (left) ── */}
            <div
                className="absolute -left-[3px] rounded-l-md bg-gradient-to-b from-[#3a3a3e] to-[#2a2a2e]"
                style={{ top: 130, width: 3, height: 34 }}
            />
            <div
                className="absolute -left-[3px] rounded-l-md bg-gradient-to-b from-[#3a3a3e] to-[#2a2a2e]"
                style={{ top: 178, width: 3, height: 68 }}
            />
            <div
                className="absolute -left-[3px] rounded-l-md bg-gradient-to-b from-[#3a3a3e] to-[#2a2a2e]"
                style={{ top: 256, width: 3, height: 68 }}
            />

            {/* ── Side buttons (right) ── */}
            <div
                className="absolute -right-[3px] rounded-r-md bg-gradient-to-b from-[#3a3a3e] to-[#2a2a2e]"
                style={{ top: 170, width: 3, height: 100 }}
            />
        </motion.div>
    );
}

/* ─────────────────────────────────────────────
   STATUS BAR
───────────────────────────────────────────── */
function StatusBar() {
    return (
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 pt-5 pb-2 text-[11px] font-semibold text-gray-900">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
                {/* Signal */}
                <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
                    <rect x="0" y="8" width="3" height="4" rx="0.5" opacity="0.35" />
                    <rect x="4.5" y="5" width="3" height="7" rx="0.5" opacity="0.35" />
                    <rect x="9" y="2" width="3" height="10" rx="0.5" />
                    <rect x="13.5" y="0" width="2.5" height="12" rx="0.5" />
                </svg>
                {/* WiFi */}
                <svg width="16" height="12" viewBox="0 0 24 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M1 5c6-6.67 16-6.67 22 0" opacity="0.35" />
                    <path d="M4.5 9c4.17-4.44 11-4.44 15 0" opacity="0.35" />
                    <path d="M8 13c2.33-2.22 6-2.22 8 0" />
                    <circle cx="12" cy="17" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                {/* Battery */}
                <div className="flex items-center gap-0.5">
                    <div className="relative w-[22px] h-[11px] rounded-[3px] border border-gray-800 flex items-center px-[1.5px]">
                        <div className="h-[7px] w-[15px] bg-gray-900 rounded-[1.5px]" />
                    </div>
                    <div className="w-[2px] h-[5px] bg-gray-800 rounded-r-[1px]" />
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   COLLECTIBLES SCREEN  (same logic, phone-scaled)
───────────────────────────────────────────── */
function CollectiblesScreen() {
    const [view, setView] = useState('list');

    return (
        <div className="p-5 pb-20 min-h-full">
            {/* Title */}
            <h1 className="text-[20px] font-bold text-gray-900 mb-4 tracking-tight">
                Collectibles
            </h1>

            {/* Toggle Buttons */}
            <div className="flex items-center gap-2 mb-4">
                <ViewButton active={view === 'list'} icon={ListIcon} label="List view" onClick={() => setView('list')} />
                <ViewButton active={view === 'card'} icon={CardIcon} label="Card view" onClick={() => setView('card')} />
                <ViewButton active={view === 'pack'} icon={PackIcon} label="Pack view" onClick={() => setView('pack')} />
            </div>

            <hr className="border-gray-100 mb-5" />

            {/* Items */}
            <div className="relative w-full">
                <motion.div
                    layout
                    className={
                        view === 'card'
                            ? 'grid grid-cols-2 gap-3'
                            : view === 'list'
                                ? 'flex flex-col gap-4'
                                : 'relative flex justify-center items-center h-52'
                    }
                >
                    {collectibles.map((item, i) => (
                        <ItemCard key={item.id} item={item} view={view} index={i} />
                    ))}
                </motion.div>

                {/* Pack summary */}
                <AnimatePresence>
                    {view === 'pack' && (
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.28, duration: 0.4 } }}
                            exit={{ opacity: 0, y: -10, transition: { duration: 0.12 } }}
                            className="w-full flex flex-col items-center mt-5"
                        >
                            <span className="font-bold text-[17px] text-gray-900">2 Collectibles</span>
                            <p className="text-[15px] font-bold text-gray-900 mt-0.5">
                                1.064 <span className="text-gray-400 font-medium">ETH</span>
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   VIEW TOGGLE BUTTON
───────────────────────────────────────────── */
function ViewButton({ active, icon: Icon, label, onClick }) {
    return (
        <motion.button
            onClick={onClick}
            whileTap={{ scale: 0.93 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className={`flex items-center gap-1.5 px-3 py-[7px] rounded-full text-[12px] font-semibold transition-colors duration-300 focus:outline-none ${active ? 'bg-[#0bbdff] text-white' : 'bg-gray-100 text-gray-500'
                }`}
        >
            <Icon active={active} />
            {label}
        </motion.button>
    );
}

/* ─────────────────────────────────────────────
   ITEM CARD  (list / card / pack)
───────────────────────────────────────────── */
function ItemCard({ item, view, index }) {
    const isList = view === 'list';
    const isCard = view === 'card';
    const isPack = view === 'pack';
    const isTop = index === 1; // cassette on top in pack view

    return (
        <motion.div
            layout
            transition={{ type: 'spring', stiffness: 340, damping: 28 }}
            animate={
                isPack
                    ? {
                        rotate: isTop ? 0 : -12,
                        x: isTop ? 8 : -8,
                        y: isTop ? 6 : -4,
                        scale: isTop ? 1.06 : 1,
                        zIndex: isTop ? 10 : 1,
                    }
                    : { rotate: 0, x: 0, y: 0, scale: 1, zIndex: 'auto' }
            }
            className={
                isCard ? 'flex flex-col gap-2 w-full' :
                    isList ? 'flex flex-row items-center gap-3 w-full' :
                        'absolute w-36 h-36 flex-shrink-0'
            }
        >
            {/* Image tile */}
            <motion.div
                layout
                className={`flex items-center justify-center flex-shrink-0 overflow-hidden ${isList ? 'w-[68px] h-[68px] rounded-[16px]' :
                    isCard ? 'w-full aspect-square rounded-[18px]' :
                        'w-full h-full rounded-[20px] shadow-lg'
                    }`}
                style={{ background: item.bgColor }}
            >
                <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    draggable={false}
                />
            </motion.div>

            {/* Text info */}
            <AnimatePresence>
                {!isPack && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.08, duration: 0.25 } }}
                        exit={{ opacity: 0, transition: { duration: 0.08 } }}
                        className={isList ? 'flex-1 min-w-0 flex justify-between items-center' : 'flex flex-col gap-0.5'}
                    >
                        <div className={isList ? '' : ''}>
                            <p className="font-bold text-[13px] text-gray-900 leading-snug truncate">
                                {item.title}
                            </p>
                            <div className={`flex items-center gap-1 ${!isList ? 'justify-between mt-0.5' : ''}`}>
                                <p className="text-[12px]">
                                    <span className="font-bold text-gray-900">{item.price}</span>{' '}
                                    <span className="text-gray-400 font-medium">ETH</span>
                                </p>
                                {!isList && <DiamondBadge number={item.number} />}
                            </div>
                        </div>
                        {isList && <DiamondBadge number={item.number} />}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────
   BADGE
───────────────────────────────────────────── */
function DiamondBadge({ number }) {
    return (
        <div className="flex items-center gap-1 text-[12px] font-semibold text-gray-500">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="#f5e07a">
                <polygon points="12 2 22 12 12 22 2 12" />
            </svg>
            {number}
        </div>
    );
}

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
function ListIcon({ active }) {
    const c = active ? '#fff' : '#9ca3af';
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="10" y1="6" x2="21" y2="6" />
            <line x1="10" y1="12" x2="21" y2="12" />
            <line x1="10" y1="18" x2="21" y2="18" />
            <line x1="4" y1="5" x2="4" y2="19" />
            <polyline points="1 8 4 5 7 8" />
            <polyline points="1 16 4 19 7 16" />
        </svg>
    );
}

function CardIcon({ active }) {
    const c = active ? '#fff' : '#9ca3af';
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
    );
}

function PackIcon({ active }) {
    const c = active ? '#fff' : '#9ca3af';
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="7" y="7" width="14" height="14" rx="2" />
            <path d="M7 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
        </svg>
    );
}
