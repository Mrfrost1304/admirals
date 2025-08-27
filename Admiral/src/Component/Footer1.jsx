
import {
  Youtube,
  Linkedin,
  Instagram,
  Send,
  Twitter,
  ArrowUp,
  ChevronDown,
} from "lucide-react";

export default function AdmiralsFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Divider */}
        <hr className="border-gray-200 mb-8" />

        {/* Top section (social + company info) */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          {/* Social icons */}
          <div className="flex space-x-3 mb-4 lg:mb-0">
            {[Youtube, Linkedin, Instagram, Send, Twitter].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <Icon className="w-5 h-5 text-gray-700" />
              </div>
            ))}
          </div>

          {/* Company info */}
          <div className="flex items-center text-gray-600 text-sm bg-gray-100 px-3 py-2 rounded-md">
            <span>This website operates under </span>
            <span className="font-semibold text-gray-800 ml-1">
              Admirals SC Ltd
            </span>
            <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-8" />

        {/* Footer links: 2 column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm">
          {/* Left column */}
          <div className="space-y-6">
            {/* Platforms */}
            <div>
              <h3 className="text-gray-800 font-semibold mb-3">Platforms</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-600">
                {[
                  "Admirals Platform",
                  "MetaTrader WebTrader",
                  "Admirals Mobile App",
                  "MetaTrader Supreme Edition",
                  "StereoTrader",
                  "VPS",
                  "Parallels for MAC",
                  "MetaTrader 4",
                  "MetaTrader 5",
                  "Asset Management",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="hover:text-gray-800 cursor-pointer transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-gray-800 font-semibold mb-3">Education</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-600">
                {[
                  "Forex & CFD Webinars",
                  "Articles & Tutorials",
                  "Trading Videos",
                  "FAQ",
                  "E-books",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="hover:text-gray-800 cursor-pointer transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* About us */}
            <div>
              <h3 className="text-gray-800 font-semibold mb-3">About us</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-600">
                {[
                  "Leadership & Experts",
                  "Financial Security",
                  "Secure your trading account",
                  "Careers",
                  "Help center",
                  "Company News",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="hover:text-gray-800 cursor-pointer transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Partnership */}
            <div>
              <h3 className="text-gray-800 font-semibold">Partnership</h3>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Products */}
            <div>
              <h3 className="text-gray-800 font-semibold mb-3">Products</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-600">
                {[
                  "Forex",
                  "Commodities",
                  "Indices",
                  "Stocks",
                  "ETFs",
                  "Cryptocurrencies",
                  "Margin Requirements",
                  "Contract Specifications",
                  "Fractional Investing",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="hover:text-gray-800 cursor-pointer transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Analytics */}
            <div>
              <h3 className="text-gray-800 font-semibold mb-3">Analytics</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-600">
                {[
                  "Macroscope",
                  "Trading News",
                  "Research Terminal",
                  "Forex Calendar",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="hover:text-gray-800 cursor-pointer transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact us */}
            <div>
              <h3 className="text-gray-800 font-semibold mb-3">Contact us</h3>
            </div>
          </div>
        </div>

         
           
      
      </div>
    </footer>
  );
}
