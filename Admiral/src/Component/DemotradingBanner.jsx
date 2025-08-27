import React from 'react';
import { Smile, DollarSign, CreditCard } from 'lucide-react';

export default function DemoTradingBanner() {
  return (
    <div className="relative w-full bg-gray-100 overflow-hidden" style={{ aspectRatio: '1200/400' }}>
      {/* Left side - Text content */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-gray-100 flex flex-col justify-center px-12">
        <h1 className="text-6xl font-light text-gray-800 mb-6 leading-tight">
          Try demo trading
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md">
          Not sure how to start? We've got you! Start practicing trading with virtual funds on the Admirals demo trading account.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded text-lg transition-colors w-fit">
          TRY FREE ON DEMO
        </button>
      </div>

      {/* Right side - Phone mockups and feature cards */}
      <div className="absolute right-0 top-0 w-1/2 h-full relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-black"></div>
        
        {/* Chart pattern background */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20">
          <div className="absolute top-8 right-8 w-64 h-32">
            {/* Candlestick chart simulation */}
            <svg width="100%" height="100%" viewBox="0 0 256 128">
              {/* Green and red candlesticks */}
              {[...Array(20)].map((_, i) => {
                const x = i * 12 + 10;
                const isGreen = Math.random() > 0.5;
                const height = Math.random() * 40 + 10;
                const y = 64 - height/2;
                return (
                  <g key={i}>
                    <rect x={x} y={y} width="8" height={height} fill={isGreen ? '#22c55e' : '#ef4444'} opacity="0.7"/>
                    <line x1={x+4} y1={y-5} x2={x+4} y2={y+height+5} stroke={isGreen ? '#22c55e' : '#ef4444'} strokeWidth="1" opacity="0.7"/>
                  </g>
                );
              })}
              {/* Orange trend line */}
              <path d="M 10 80 Q 60 60 120 50 T 240 45" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.8"/>
            </svg>
          </div>
        </div>

        {/* Phone mockup 1 - Left phone */}
        <div className="absolute" style={{ top: '15%', right: '65%', transform: 'rotate(-15deg)' }}>
          <div className="w-24 h-48 bg-black rounded-3xl p-1 shadow-2xl">
            <div className="w-full h-full bg-gray-900 rounded-3xl overflow-hidden relative">
              {/* Status bar */}
              <div className="flex justify-between items-center px-2 py-1 text-white text-xs">
                <span className="text-xs">9:41</span>
                <div className="flex space-x-1">
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                </div>
              </div>
              
              {/* Trading interface */}
              <div className="px-2 py-1">
                <div className="text-white text-xs mb-2">Portfolio</div>
                {/* Chart bars */}
                <div className="flex items-end space-x-1 h-16 mb-2">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="bg-green-400 rounded-sm flex-1" style={{ height: `${Math.random() * 60 + 10}%` }}></div>
                  ))}
                </div>
                {/* Trading pairs */}
                <div className="space-y-1">
                  {['BTC/USD', 'ETH/USD', 'XRP/USD'].map((pair, i) => (
                    <div key={pair} className="flex justify-between text-xs">
                      <span className="text-gray-300">{pair}</span>
                      <span className="text-green-400">+2.4%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phone mockup 2 - Right phone */}
        <div className="absolute" style={{ top: '25%', right: '25%', transform: 'rotate(12deg)' }}>
          <div className="w-24 h-48 bg-black rounded-3xl p-1 shadow-2xl">
            <div className="w-full h-full bg-gray-900 rounded-3xl overflow-hidden relative">
              {/* Status bar */}
              <div className="flex justify-between items-center px-2 py-1 text-white text-xs">
                <span className="text-xs">9:41</span>
                <div className="flex space-x-1">
                  <div className="w-4 h-2 bg-blue-500 rounded-sm"></div>
                </div>
              </div>
              
              {/* Trading interface */}
              <div className="px-2 py-1">
                <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded mb-2">BUY</div>
                {/* Price display */}
                <div className="text-white text-lg font-bold mb-1">47,442</div>
                <div className="text-green-400 text-xs mb-2">+2.34%</div>
                
                {/* Chart visualization */}
                <div className="h-12 mb-2 relative">
                  <svg width="100%" height="100%" viewBox="0 0 80 48">
                    <path d="M 0 35 Q 20 30 40 25 T 80 20" stroke="#22c55e" strokeWidth="2" fill="none"/>
                    <circle cx="75" cy="22" r="2" fill="#22c55e"/>
                  </svg>
                </div>
                
                {/* Trading options */}
                <div className="space-y-1">
                  <div className="bg-gray-800 rounded px-2 py-1 text-xs text-white">Market Order</div>
                  <div className="flex space-x-1">
                    <div className="bg-green-600 rounded px-1 py-1 text-xs text-white flex-1 text-center">BUY</div>
                    <div className="bg-red-600 rounded px-1 py-1 text-xs text-white flex-1 text-center">SELL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards overlay */}
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 space-y-3">
          {/* No stress card */}
          <div className="bg-white rounded-xl p-4 shadow-lg flex items-center space-x-3 w-44">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Smile className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-gray-800 font-medium">No stress</div>
            </div>
          </div>

          {/* No deposit card */}
          <div className="bg-white rounded-xl p-4 shadow-lg flex items-center space-x-3 w-44">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-gray-800 font-medium">No deposit</div>
            </div>
          </div>

          {/* No credit card */}
          <div className="bg-white rounded-xl p-4 shadow-lg flex items-center space-x-3 w-44">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-gray-800 font-medium">No credit card</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}