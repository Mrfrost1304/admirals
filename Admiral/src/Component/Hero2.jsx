import React from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import blackcir from '../assets/blackcir.png'
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
          
          <img src={blackcir}></img>
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