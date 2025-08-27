import React from 'react';
import { Youtube, Linkedin, Instagram, Send, Twitter, ArrowUp, ChevronDown } from 'lucide-react';

export default function AdmiralsFooter() {
  return (
    <footer className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top section with social icons and company info */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          {/* Social media icons */}
          <div className="flex space-x-3 mb-6 lg:mb-0">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <Youtube className="w-5 h-5 text-gray-700" />
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <Linkedin className="w-5 h-5 text-gray-700" />
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <Instagram className="w-5 h-5 text-gray-700" />
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <Send className="w-5 h-5 text-gray-700" />
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <Twitter className="w-5 h-5 text-gray-700" />
            </div>
          </div>

          {/* Company info */}
          <div className="flex items-center text-gray-600">
            <span>This website operates under </span>
            <span className="font-semibold text-gray-800 ml-1">Admirals SC Ltd</span>
            <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Platforms */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Platforms</h3>
            <div className="space-y-2 text-gray-600">
              <div className="hover:text-gray-800 cursor-pointer">Admirals Platform</div>
              <div className="hover:text-gray-800 cursor-pointer">MetaTrader WebTrader</div>
              <div className="hover:text-gray-800 cursor-pointer">Admirals Mobile App</div>
              <div className="hover:text-gray-800 cursor-pointer">MetaTrader Supreme Edition</div>
              <div className="hover:text-gray-800 cursor-pointer">StereoTrader</div>
              <div className="hover:text-gray-800 cursor-pointer">VPS</div>
              <div className="hover:text-gray-800 cursor-pointer">Parallels for MAC</div>
              <div className="hover:text-gray-800 cursor-pointer">MetaTrader 4</div>
              <div className="hover:text-gray-800 cursor-pointer">MetaTrader 5</div>
              <div className="hover:text-gray-800 cursor-pointer">Asset Management</div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Products</h3>
            <div className="space-y-2 text-gray-600">
              <div className="hover:text-gray-800 cursor-pointer">Forex</div>
              <div className="hover:text-gray-800 cursor-pointer">Commodities</div>
              <div className="hover:text-gray-800 cursor-pointer">Indices</div>
              <div className="hover:text-gray-800 cursor-pointer">Stocks</div>
              <div className="hover:text-gray-800 cursor-pointer">ETFs</div>
              <div className="hover:text-gray-800 cursor-pointer">Cryptocurrencies</div>
              <div className="hover:text-gray-800 cursor-pointer">Margin Requirements</div>
              <div className="hover:text-gray-800 cursor-pointer">Contract Specifications</div>
              <div className="hover:text-gray-800 cursor-pointer">Fractional Investing</div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Education</h3>
            <div className="space-y-2 text-gray-600">
              <div className="hover:text-gray-800 cursor-pointer">Forex & CFD Webinars</div>
              <div className="hover:text-gray-800 cursor-pointer">Articles & Tutorials</div>
              <div className="hover:text-gray-800 cursor-pointer">Trading Videos</div>
              <div className="hover:text-gray-800 cursor-pointer">FAQ</div>
              <div className="hover:text-gray-800 cursor-pointer">E-books</div>
            </div>
          </div>

          {/* Analytics */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Analytics</h3>
            <div className="space-y-2 text-gray-600">
              <div className="hover:text-gray-800 cursor-pointer">Macroscope</div>
              <div className="hover:text-gray-800 cursor-pointer">Trading News</div>
              <div className="hover:text-gray-800 cursor-pointer">Research Terminal</div>
              <div className="hover:text-gray-800 cursor-pointer">Forex Calendar</div>
            </div>
          </div>

          {/* About us & Contact us combined */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-4">About us</h3>
            <div className="space-y-2 text-gray-600 mb-6">
              <div className="hover:text-gray-800 cursor-pointer">Leadership & Experts</div>
              <div className="hover:text-gray-800 cursor-pointer">Financial Security</div>
              <div className="hover:text-gray-800 cursor-pointer">Secure your trading account</div>
              <div className="hover:text-gray-800 cursor-pointer">Careers</div>
              <div className="hover:text-gray-800 cursor-pointer">Help center</div>
              <div className="hover:text-gray-800 cursor-pointer">Company News</div>
            </div>
            
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Contact us</h3>
            
            <div className="mt-6">
              <h4 className="text-gray-800 font-semibold text-lg mb-4">Partnership</h4>
            </div>
          </div>
        </div>

        {/* Bottom section with scroll to top */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="text-gray-500 text-sm">
              © 2024 Admirals. All rights reserved.
            </div>
            
            {/* Scroll to top button */}
            <button className="flex items-center justify-center w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}