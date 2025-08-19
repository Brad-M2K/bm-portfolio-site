'use client';

import { useRouter } from 'next/navigation';

export default function Hero() {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/projects');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-transparent">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                Welcome to My Portfolio
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-300 text-center max-w-2xl px-4">
                A showcase of my work and skills as a developer.
            </p>
            <button 
                onClick={handleButtonClick} 
                className="mt-8 px-8 py-4 bg-white/30 hover:bg-white/50 text-white rounded-lg font-bold text-xl transition-all duration-300 border-2 border-white/20 hover:border-white/40"
            >
                View Projects
            </button>
        </div>
    );
}