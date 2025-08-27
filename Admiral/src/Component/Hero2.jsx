import React from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export default function CFDTradingHero() {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          
          {/* Content */}
          <div className="space-y-8 z-10 relative">
            <div className="space-y-6">
              <p className="text-white/80 text-lg font-medium">
                Great news for traders!
              </p>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Trade CFD with 0<br />
                swap fees
              </h1>
            </div>
            
            <p className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Experience the freedom of trading without swaps on the most sought-after currency pairs, precious metals, and index CFDs! Enjoy a seamless trading experience that allows you to maximise your potential without the burden of overnight fees.*
            </p>
            
            <div className="pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl">
                Start Trading
              </button>
            </div>
          </div>
          
          {/* Dynamic Water "0" Graphic */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
              <svg viewBox="0 0 500 500" className="w-full h-full">
                <defs>
                  {/* Water texture gradients */}
                  <radialGradient id="waterGradient" cx="30%" cy="30%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="40%" stopColor="#3b82f6" />
                    <stop offset="80%" stopColor="#1e40af" />
                    <stop offset="100%" stopColor="#1e3a8a" />
                  </radialGradient>
                  
                  <radialGradient id="innerWater" cx="50%" cy="40%">
                    <stop offset="0%" stopColor="#93c5fd" />
                    <stop offset="50%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </radialGradient>
                  
                  {/* Wave animation filter */}
                  <filter id="wave" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="8"/>
                  </filter>
                </defs>
                
                {/* Main "0" water shape */}
                <path
                  d="M250 60 C350 60 430 140 430 240 C430 340 350 420 250 420 C150 420 70 340 70 240 C70 140 150 60 250 60 Z M250 150 C200 150 160 190 160 240 C160 290 200 330 250 330 C300 330 340 290 340 240 C340 190 300 150 250 150 Z"
                  fill="url(#waterGradient)"
                  filter="url(#wave)"
                  className="animate-pulse"
                />
                
                {/* Inner water flow */}
                <circle
                  cx="250"
                  cy="240"
                  r="85"
                  fill="url(#innerWater)"
                  opacity="0.8"
                  className="animate-spin"
                  style={{ animationDuration: '20s' }}
                />
                
                {/* Water splash effects */}
                <g opacity="0.7">
                  <path
                    d="M150 320 Q180 300 210 320 Q240 340 270 320 Q300 300 330 320 Q360 340 390 320"
                    stroke="#60a5fa"
                    strokeWidth="3"
                    fill="none"
                    className="animate-pulse"
                  />
                  <path
                    d="M120 350 Q150 330 180 350 Q210 370 240 350 Q270 330 300 350 Q330 370 360 350"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                    className="animate-pulse"
                    style={{ animationDelay: '1s' }}
                  />
                </g>
                
                {/* Floating water droplets */}
                <circle cx="380" cy="150" r="6" fill="#60a5fa" opacity="0.7" className="animate-bounce"/>
                <circle cx="120" cy="200" r="4" fill="#3b82f6" opacity="0.5" className="animate-bounce" style={{ animationDelay: '0.5s' }}/>
                <circle cx="400" cy="280" r="5" fill="#93c5fd" opacity="0.6" className="animate-bounce" style={{ animationDelay: '1.5s' }}/>
                <circle cx="100" cy="320" r="3" fill="#60a5fa" opacity="0.4" className="animate-bounce" style={{ animationDelay: '2s' }}/>
                
                {/* Dynamic wave lines */}
                <path
                  d="M80 380 Q150 360 220 380 Q290 400 360 380 Q430 360 500 380"
                  stroke="url(#waterGradient)"
                  strokeWidth="4"
                  fill="none"
                  opacity="0.5"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Up Button */}
      <div className="fixed bottom-6 left-6">
        <button className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-200 transform hover:scale-110">
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
      
     
      
      {/* Terms notice */}
      <div className="absolute bottom-4 right-24 text-white/50 text-sm">
        *Terms apply
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-800/10 pointer-events-none"></div>
    </div>
  );
}