import React from 'react';
import { MessageCircle } from 'lucide-react';
import bluecir from '../assets/bluecir.png'

export default function CommissionFreeSection() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <img src={bluecir}></img>
          
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