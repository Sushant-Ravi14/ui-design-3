import React from 'react';

export default function Pagination({ total, current }) {
    return (
        <div className="flex items-center space-x-3">
            {Array.from({ length: total }).map((_, i) => (
                <div
                    key={i}
                    className={`h-2.5 rounded-full transition-all duration-500 ease-out ${i === current
                            ? 'w-10 bg-gray-900 shadow-md'
                            : 'w-2.5 bg-gray-900/20 hover:bg-gray-900/40 cursor-pointer pointer-events-none'
                        }`}
                />
            ))}
        </div>
    );
}
