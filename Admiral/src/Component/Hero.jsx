import React from "react";
import { MessageCircle } from "lucide-react";
import zeroWave from "../assets/zero-wave.png"; // your 0+wave image

export default function CommissionFreeSection() {
  return (
    <div className="relative bg-[#f4f8fd]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left side (big image) */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={zeroWave}
              alt="Zero commission"
              className="w-[420px] lg:w-[500px] h-auto object-contain"
            />
          </div>

          {/* Right side (text + button) */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
              Commission-Free <br />
              Global Stock Markets
            </h1>

            <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              Invest in a diverse range of stocks and ETFs from the US, EU, and UK markets 
              without having to worry about commission fees. This means you can maximise 
              your investment potential while keeping your costs low, allowing you to build 
              a robust portfolio with ease.*
            </p>

            <div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200">
                Start Investing
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chat button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg flex items-center space-x-2 transition-transform hover:scale-110">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Live chat</span>
        </button>
      </div>
    </div>
  );
}
