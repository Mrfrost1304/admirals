
import { DollarSign, Euro, TrendingUp, Briefcase, FileText, Bitcoin } from 'lucide-react';

export default function TradingInstruments() {
  const instruments = [
    {
      icon: <div className="relative">
        <DollarSign className="w-6 h-6 text-blue-500" />
        <Euro className="w-4 h-4 text-blue-500 absolute -bottom-1 -right-1" />
      </div>,
      title: "Forex",
      description: "80 CFDs on currency pairs"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: "Indices",
      description: "12 Index CFDs, including cash CFDs and Index Futures"
    },
    {
      icon: <div className="relative">
        <div className="w-6 h-6 flex items-center justify-center">
          <div className="w-4 h-1 bg-blue-500 rounded"></div>
          <div className="w-1 h-4 bg-blue-500 rounded absolute"></div>
        </div>
      </div>,
      title: "Commodities",
      description: "5 CFDs on precious metals and energies"
    },
    {
      icon: <div className="relative w-6 h-6">
        <div className="text-blue-500 font-bold text-sm">ETFs</div>
      </div>,
      title: "ETFs",
      description: "25 most prominent ETFs available via CFDs"
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      title: "Stocks",
      description: "500+ CFDs on global blue-chip stocks"
    },
    {
      icon: <Bitcoin className="w-6 h-6 text-blue-500" />,
      title: "Cryptocurrencies",
      description: "CFDs on Bitcoin, Dash, Ether, Litecoin and more"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
            Trade 2500+ instruments
          </h2>
        </div>
        
        {/* Instruments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {instruments.map((instrument, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  {instrument.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {instrument.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {instrument.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}