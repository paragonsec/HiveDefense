import React from 'react';
import { Shield } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden flex items-center justify-center">
      {/* Subtle Honeycomb Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {[...Array(30)].map((_, i) => {
            const size = Math.random() * 50 + 100;
            return (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animation: `float ${Math.random() * 10 + 20}s linear infinite`,
                  opacity: 0.1 + Math.random() * 0.1,
                }}
              >
                <svg width={size} height={size} viewBox="0 0 100 100">
                  <path
                    d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
                    fill="none"
                    stroke="#808080"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            )
          })}
        </div>
      </div>

      {/* Central Content */}
      <div className="relative z-10 text-center space-y-8">
        {/* Animated Logo */}
        <div className="flex justify-center mb-12 transform hover:scale-110 transition-all duration-700">
          <svg viewBox="0 0 400 400" className="w-40 h-40">
            <path 
              d="M200 50 L330 130 L330 270 L200 350 L70 270 L70 130 Z" 
              fill="#1a1a1a" 
              stroke="#FFD700" 
              strokeWidth="8"
              className="animate-pulse"
            />
            <path 
              d="M140 150 L140 250 M140 200 L260 200 M260 150 L260 250" 
              stroke="#FFD700" 
              strokeWidth="24" 
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="200" cy="120" r="8" fill="#808080">
              <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="280" r="8" fill="#808080">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* Company Name with Animation */}
        <h1 
          className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fadeIn 
                     bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent"
        >
          HiveDefense
        </h1>

        {/* Subtle Tagline */}
        <p className="text-lg md:text-xl text-gray-500 max-w-md mx-auto tracking-wide font-light opacity-0 animate-fadeIn" 
           style={{ animationDelay: '0.5s' }}>
          Redefining cybersecurity through deception
        </p>

        {/* Simple Divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto my-8 opacity-0 animate-fadeIn"
             style={{ animationDelay: '0.7s' }}></div>

        {/* Status Indicator */}
        <div className="flex items-center justify-center space-x-2 opacity-0 animate-fadeIn"
             style={{ animationDelay: '0.9s' }}>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-400 uppercase tracking-widest">In Development</span>
        </div>
      </div>
    </div>
  );
}