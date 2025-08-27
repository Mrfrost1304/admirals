import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function CommissionFreeSection() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Large "0" Graphic */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Main "0" shape with gradient */}
              <div className="relative w-96 h-96 lg:w-[450px] lg:h-[450px]">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <linearGradient id="zeroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1d4ed8" />
                    </linearGradient>
                    <linearGradient id="waveGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(147, 197, 253, 0.8)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Zero shape */}
                  <path
                    d="M200 50 C280 50 350 120 350 200 C350 280 280 350 200 350 C120 350 50 280 50 200 C50 120 120 50 200 50 Z M200 120 C160 120 130 150 130 200 C130 250 160 280 200 280 C240 280 270 250 270 200 C270 150 240 120 200 120 Z"
                    fill="url(#zeroGradient)"
                  />
                  
                  {/* Wave pattern at bottom */}
                  <path
                    d="M50 300 Q100 280 150 300 T250 300 T350 300 L350 350 Q300 330 250 350 T150 350 T50 350 Z"
                    fill="url(#waveGradient)"
                    opacity="0.7"
                  />
                  
                  {/* Additional wave elements */}
                  <path
                    d="M80 320 Q120 310 160 320 T240 320 T320 320"
                    stroke="rgba(147, 197, 253, 0.6)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M60 340 Q100 330 140 340 T220 340 T300 340"
                    stroke="rgba(147, 197, 253, 0.4)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute top-10 right-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute bottom-20 left-8 w-3 h-3 bg-blue-300 rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-blue-500 rounded-full opacity-50 animate-ping"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Commission-Free
                <br />
                <span className="text-gray-800">Global Stock Markets</span>
              </h1>
            </div>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Invest in a diverse range of stocks and ETFs from the US, EU, and UK markets without having to worry about commission fees. This means you can maximise your investment potential while keeping your costs low, allowing you to build a robust portfolio with ease.*
            </p>
            
            <div className="pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                Start Investing
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Live Chat Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 transform hover:scale-110 flex items-center space-x-2">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Live chat</span>
        </button>
      </div>
    </div>
  );
}