import React, { useState } from 'react';
import { ArrowUp, MessageCircle, Monitor } from 'lucide-react';

export default function MetaTraderShowcase() {
  const [activeTab, setActiveTab] = useState('Trading');

  const tabs = [
    { id: 'Trading', label: 'Trading' },
    { id: 'PC', label: 'PC' }, 
    { id: 'WEB TRADER', label: 'WEB TRADER' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Tab Navigation */}
        <div className="mb-16">
          <div className="bg-white rounded-lg p-2 inline-flex shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-8">
                MetaTrader: The #1 tool for traders and investors worldwide
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Trade in 500+ trading instruments including Forex pairs, CFDs on indices, commodities, shares and ETFs. Available on Windows.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-gray-700 p-3 rounded-lg">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 transform hover:scale-105">
                GET METATRADER
              </button>
            </div>
          </div>
          
          {/* Device Mockups */}
          <div className="relative">
            {/* Desktop/Laptop Screen */}
            <div className="relative">
              <div className="bg-gray-800 rounded-t-lg p-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="bg-white rounded-b-lg shadow-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-gray-100 p-4">
                  {/* Trading Interface Mockup */}
                  <div className="grid grid-cols-3 gap-4 h-full">
                    {/* Left Panel - Market Watch */}
                    <div className="bg-white rounded shadow p-3">
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium">EURUSD</span>
                          <span className="text-green-600">1.0845</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="font-medium">GBPUSD</span>
                          <span className="text-red-600">1.2634</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="font-medium">USDJPY</span>
                          <span className="text-green-600">149.82</span>
                        </div>
                      </div>
                    </div>
                    {/* Center Panel - Chart */}
                    <div className="bg-white rounded shadow p-2">
                      <div className="h-full bg-gradient-to-tr from-green-100 to-blue-100 rounded relative">
                        <svg className="w-full h-full" viewBox="0 0 100 60">
                          <polyline
                            points="10,50 20,45 30,40 40,35 50,30 60,25 70,20 80,15 90,10"
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* Right Panel - Orders */}
                    <div className="bg-white rounded shadow p-3">
                      <div className="space-y-2">
                        <div className="text-xs font-medium">Active Orders</div>
                        <div className="bg-blue-50 rounded p-2">
                          <div className="text-xs">BUY EURUSD</div>
                          <div className="text-xs text-gray-600">0.01 lots</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet Mockup */}
            <div className="absolute -bottom-8 -left-8 w-64 transform rotate-12">
              <div className="bg-gray-800 rounded-lg p-3 shadow-2xl">
                <div className="bg-white rounded aspect-[4/3] p-2">
                  <div className="grid grid-cols-2 gap-2 h-full">
                    <div className="bg-gray-100 rounded p-2">
                      <div className="space-y-1">
                        <div className="h-2 bg-blue-300 rounded w-3/4"></div>
                        <div className="h-2 bg-green-300 rounded w-1/2"></div>
                        <div className="h-2 bg-red-300 rounded w-2/3"></div>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded">
                      <svg className="w-full h-full" viewBox="0 0 50 30">
                        <polyline
                          points="5,25 10,20 15,22 20,18 25,15 30,12 35,10 40,8 45,5"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="absolute -top-4 -right-4 w-32">
              <div className="bg-gray-900 rounded-2xl p-2 shadow-2xl">
                <div className="bg-white rounded-xl aspect-[9/16] p-2">
                  <div className="space-y-2 h-full">
                    <div className="bg-gray-100 rounded p-1">
                      <div className="space-y-1">
                        <div className="h-1 bg-blue-300 rounded w-full"></div>
                        <div className="h-1 bg-green-300 rounded w-3/4"></div>
                        <div className="h-1 bg-red-300 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded flex-1">
                      <svg className="w-full h-full" viewBox="0 0 30 50">
                        <polyline
                          points="3,45 8,40 13,42 18,38 23,35 27,30"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
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
      
      
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-slate-900/20 pointer-events-none"></div>
    </div>
  );
}