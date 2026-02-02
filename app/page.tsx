'use client';

import { useState } from 'react';

export default function ValentinePage() {
  const [showYes, setShowYes] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({ top: '60%', left: '60%' });

  const handleNoHover = () => {
    const randomTop = Math.random() * 70 + 10;
    const randomLeft = Math.random() * 70 + 10;
    setNoButtonStyle({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  const handleYes = () => {
    setShowYes(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-300 to-red-200 overflow-hidden relative">
      {/* Floating Hearts Animation */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute text-4xl animate-float-heart opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          💕
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {!showYes ? (
          <div className="text-center space-y-12 animate-fade-in">
            {/* Main Question */}
            <div className="space-y-6">
              <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-500 to-rose-600 animate-pulse-slow drop-shadow-2xl">
                Margarita
              </h1>
              <p className="text-4xl md:text-6xl font-semibold text-rose-700 animate-bounce-slow">
                💝
              </p>
              <h2 className="text-3xl md:text-5xl font-medium text-red-600 px-4">
                Will you be my Valentine?
              </h2>
            </div>

            {/* Buttons */}
            <div className="relative w-full h-64">
              <button
                onClick={handleYes}
                className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 
                         bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 
                         text-white text-3xl font-bold py-6 px-12 rounded-full 
                         shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 
                         hover:scale-110 animate-pulse"
              >
                YES! 💕
              </button>

              <button
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 
                         bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 
                         text-white text-2xl font-bold py-4 px-10 rounded-full 
                         shadow-xl transition-all duration-200"
                style={noButtonStyle}
              >
                No
              </button>
            </div>

            <p className="text-rose-600 text-xl italic animate-fade-in-delayed">
              (Hint: The "No" button is shy... try to catch it! 😉)
            </p>
          </div>
        ) : (
          <div className="text-center space-y-8 animate-fade-in">
            <div className="text-9xl animate-bounce">
              🎉💕🥳
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-500 to-rose-600 animate-pulse">
              Yay! 💖
            </h1>
            <p className="text-3xl md:text-5xl text-rose-700 font-semibold">
              You made me the happiest! 
            </p>
            <p className="text-2xl md:text-4xl text-red-600">
              I can't wait to spend Valentine's Day with you! 🌹
            </p>
            <div className="text-7xl animate-spin-slow">
              ❤️
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
