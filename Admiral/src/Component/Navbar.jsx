
import { Globe } from 'lucide-react';

export default function AdmiralsHeader() {
  return (
    <div className="w-full sticky top-0 z-50">
      {/* Risk Warning Banner */}
      <div className="bg-black text-white text-center py-2 px-4 text-sm">
        CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
      </div>
      
      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-blue-900">
                admirals
              </div>
            </div>
            
            {/* Navigation Menu */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Open account
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Platforms
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Products
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Education
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Analytics
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                About us
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Contact us
              </a>
            </nav>
            
            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <button className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <Globe className="w-5 h-5" />
              </button>
              
              {/* Login Button */}
              <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                Login
              </button>
              
              {/* Register Button */}
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
