'use client';

import { useState } from 'react';

export default function ValentinePage() {
  const [showYes, setShowYes] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({ top: '55%', left: '65%' });

  const handleNoHover = () => {
    const randomTop = Math.random() * 70 + 10;
    const randomLeft = Math.random() * 70 + 10;
    setNoButtonStyle({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  const handleYes = () => {
    setShowYes(true);
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-pink-900/20 via-black to-black"></div>
      
      {/* Stars/Sparkles Background */}
      {[...Array(100)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Floating Hearts - 50+ hearts with varying sizes */}
      {[...Array(60)].map((_, i) => {
        const size = Math.random() * 3 + 1;
        return (
          <div
            key={`heart-${i}`}
            className="absolute animate-float-heart opacity-70"
            style={{
              fontSize: `${size}rem`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          >
            {Math.random() > 0.5 ? '💕' : Math.random() > 0.5 ? '💖' : '❤️'}
          </div>
        );
      })}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {!showYes ? (
          <div className="text-center space-y-16 animate-fade-in">
            {/* Massive Neon Name */}
            <div className="space-y-8">
              <h1 className="text-8xl md:text-[12rem] lg:text-[16rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 neon-text-glow animate-pulse-glow drop-shadow-2xl leading-tight">
                Margarita
              </h1>
              <div className="flex justify-center gap-6 text-7xl md:text-9xl animate-bounce-slow">
                <span>💝</span>
                <span>✨</span>
                <span>💖</span>
                <span>✨</span>
                <span>💝</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-rose-400 neon-text-pink px-4 leading-relaxed">
                Will you be my Valentine?
              </h2>
            </div>

            {/* Massive Buttons */}
            <div className="relative w-full h-80 md:h-96">
              <button
                onClick={handleYes}
                className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 
                         bg-gradient-to-r from-pink-600 via-rose-500 to-red-600
                         text-white text-5xl md:text-7xl font-black py-10 px-20 md:py-16 md:px-32 rounded-full 
                         neon-button-glow hover:neon-button-glow-intense
                         transition-all duration-300 
                         hover:scale-110 animate-pulse-button
                         border-4 border-pink-400"
              >
                YES! 💕
              </button>

              <button
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 
                         bg-gradient-to-r from-gray-600 to-gray-700
                         text-white text-3xl md:text-4xl font-bold py-6 px-14 rounded-full 
                         shadow-xl transition-all duration-200 opacity-60
                         border-2 border-gray-500"
                style={noButtonStyle}
              >
                No
              </button>
            </div>

            <p className="text-pink-400 text-3xl md:text-4xl italic animate-fade-in-delayed neon-text-subtle">
              ✨ Try to click "No" if you dare... ✨
            </p>
          </div>
        ) : (
          <div className="text-center space-y-12 animate-celebration">
            {/* Confetti Effect */}
            {[...Array(50)].map((_, i) => (
              <div
                key={`confetti-${i}`}
                className="absolute text-6xl animate-confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              >
                {['🎉', '💕', '✨', '💖', '🎊', '💝', '⭐'][Math.floor(Math.random() * 7)]}
              </div>
            ))}
            
            <div className="text-9xl md:text-[12rem] animate-bounce-celebration">
              🎉💕🥳
            </div>
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-red-500 neon-text-glow-intense animate-pulse-glow">
              Yay! 💖
            </h1>
            <p className="text-5xl md:text-7xl lg:text-8xl text-pink-400 font-black neon-text-pink leading-relaxed">
              You made me the happiest! 
            </p>
            <p className="text-4xl md:text-6xl lg:text-7xl text-rose-400 font-bold neon-text-subtle">
              I can't wait to spend Valentine's Day with you! 🌹
            </p>
            <div className="flex justify-center gap-8 text-8xl md:text-9xl">
              <span className="animate-spin-slow">❤️</span>
              <span className="animate-bounce-slow">💝</span>
              <span className="animate-pulse-slow">💖</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
