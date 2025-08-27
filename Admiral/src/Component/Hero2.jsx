import { ArrowUp } from "lucide-react";
import blackcir from "../assets/blackcir.png";

export default function CFDTradingHero() {
  return (
    <section className="relative bg-black overflow-hidden min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* Left side content */}
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <p className="text-white/80 text-base lg:text-lg font-medium">
              Great news for traders!
            </p>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Trade CFD with 0 <br />
              swap fees
            </h1>

            <p className="text-white/70 text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Experience the freedom of trading without swaps on the most
              sought-after currency pairs, precious metals, and index CFDs! Enjoy
              a seamless trading experience that allows you to maximise your
              potential without the burden of overnight fees.*
            </p>

            <div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md text-base transition-all duration-200">
                Start Trading
              </button>
            </div>
          </div>

          {/* Right side image */}
          <div className="flex justify-center lg:justify-end relative">
            <img
              src={blackcir}
              alt="0 Swap Fees"
              className="h-full w-auto max-h-[75vh] object-contain"
            />
            <span className="absolute bottom-2 right-4 text-xs text-white/70">
              *Terms apply
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Up Button */}
      <div className="fixed bottom-6 left-6">
        <button className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-200 transform hover:scale-110">
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
