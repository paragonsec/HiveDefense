import React, { useState, useEffect } from 'react';
import { Bell, Shield, Target, AlertTriangle } from 'lucide-react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
      {/* Enhanced Honeycomb Background Pattern */}
      <div className="fixed inset-0 opacity-20">
        {/* Large centered honeycomb pattern */}
        <div className="absolute top-0 left-0 w-full h-96 overflow-hidden">
          <div className="relative w-full h-full">
            {[...Array(60)].map((_, i) => {
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
                    opacity: 0.1 + Math.random() * 0.2,
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
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-16">
        {/* Animated Logo Section */}
        <div className="flex justify-center mb-16 transition-all duration-500 hover:scale-110">
          <svg viewBox="0 0 400 400" className="w-32 h-32">
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

        {/* Animated Header Text */}
        <div className="text-center mb-16 opacity-0 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent
                         hover:bg-gradient-to-l transition-all duration-500">
            HiveDefense
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300">
            Advanced deception technology protecting your infrastructure through intelligent honeypots and adaptive defense systems.
          </p>
        </div>

        {/* Animated Feature Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          {[
            { icon: Shield, label: "Adaptive Defense" },
            { icon: Target, label: "Threat Hunting" },
            { icon: Bell, label: "Real-time Alerts" },
            { icon: AlertTriangle, label: "Attack Prevention" }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="text-center transform hover:scale-110 transition-all duration-300 ease-in-out"
              style={{
                animation: `fadeSlideUp ${0.5 + index * 0.1}s ease-out forwards`,
                opacity: 0,
              }}
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="w-12 h-12 text-yellow-500" />
              </div>
              <p className="text-sm text-gray-400">{feature.label}</p>
            </div>
          ))}
        </div>

        {/* Animated Email Signup */}
        <div className="max-w-md mx-auto transform hover:scale-105 transition-all duration-300">
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 shadow-lg hover:border-yellow-500 transition-colors duration-300">
            <h3 className="text-xl mb-4 text-center">Join the Waitlist</h3>
            {submitted ? (
              <div className="text-center text-green-500 animate-fadeIn">
                Thank you for your interest! We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md 
                           focus:outline-none focus:border-yellow-500 text-white
                           transition-all duration-300 hover:border-gray-600"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-md 
                           transition-all duration-300 font-semibold text-black
                           transform hover:scale-105"
                >
                  Get Early Access
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Animated Footer */}
        <div className="text-center mt-16 text-sm text-gray-500 hover:text-gray-400 transition-colors duration-300">
          <p>&copy; 2024 HiveDefense. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 20px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-float {
          animation: float 20s infinite;
        }
      `}</style>
    </div>
  );
}