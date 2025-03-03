import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState('');
    const [isFading, setIsFading] = useState(false)
    const fullText = "loading..";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setIsFading(true)
                    setTimeout(() => {
                        if (onComplete) onComplete()
                    }, 500)
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-50 bg-[#161a1d] text-gray-100 flex flex-col items-center justify-center transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            {/* Typing effect */}
            <div className="mb-4 font-mono md:text-3xl sm:text-xl">
                {text}
                <span className="animate-blink ml-1">_</span>
            </div>
        </div>
    );
};

export default LoadingScreen;
