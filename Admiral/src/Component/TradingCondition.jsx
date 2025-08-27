
import { ArrowUp, MessageCircle, Check, TrendingUp, TrendingDown } from 'lucide-react';
import ScrollButton from './ScrollButton';

export default function TradingConditions() {
  const features = [
    {
      icon: <Check className="w-5 h-5 text-blue-500" />,
      title: "Leverage up to:",
      detail: "1:1000"
    },
    {
      icon: <Check className="w-5 h-5 text-blue-500" />,
      title: "Forex typical spreads from 0 pips (EURUSD), micro lots and fractional shares"
    },
    {
      icon: <Check className="w-5 h-5 text-blue-500" />,
      title: "Stocks CFDs — commission-free*"
    },
    {
      icon: <Check className="w-5 h-5 text-blue-500" />,
      title: "Free real-time charts, market news and research"
    },
    {
      icon: <Check className="w-5 h-5 text-blue-500" />,
      title: "500+ CFDs on currencies, energies, metals, indices, stocks & ETFs"
    }
  ];

  const marketData = [
    {
      symbol: "GER40",
      bid: "24204.59",
      ask: "24205.19",
      trend: "up"
    },
    {
      symbol: "EURUSD",
      bid: "1.16170",
      ask: "1.16170",
      trend: "down"
    },
    {
      symbol: "GBPUSD",
      bid: "1.34615",
      ask: "1.34622",
      trend: "up"
    },
    {
      symbol: "USDJPY",
      bid: "147.749",
      ask: "147.753",
      trend: "down"
    },
    {
      symbol: "GOLD",
      bid: "3377.44",
      ask: "3377.73",
      trend: "up"
    },
    {
      symbol: "[USA30]",
      bid: "45457.40",
      ask: "45459.60",
      trend: "up"
    },
    {
      symbol: "BRENT",
      bid: "66.59",
      ask: "66.63",
      trend: "down"
    }
  ];

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Features */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                Top trading conditions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trade our best conditions yet, including some of the market's most competitive spreads!
              </p>
            </div>
            
            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mt-1">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-900 font-medium leading-relaxed">
                      {feature.title}
                      {feature.detail && (
                        <span className="ml-2 font-bold text-lg">{feature.detail}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="pt-6">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 transform hover:scale-105">
                TRY FREE ON DEMO
              </button>
            </div>
          </div>
          
          {/* Right Column - Market Data Table */}
          <div className="bg-gray-50 rounded-2xl p-8">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 mb-6 pb-4 border-b border-gray-200">
              <div className="text-gray-500 font-medium text-sm uppercase tracking-wide">
                Symbol
              </div>
              <div className="text-gray-500 font-medium text-sm uppercase tracking-wide text-right">
                Bid
              </div>
              <div className="text-gray-500 font-medium text-sm uppercase tracking-wide text-right">
                Ask
              </div>
            </div>
            
            {/* Market Data Rows */}
            <div className="space-y-4">
              {marketData.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 py-2">
                  <div className="flex items-center space-x-2">
                    {item.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className="font-medium text-gray-900">
                      {item.symbol}
                    </span>
                  </div>
                  <div className="text-right font-mono text-gray-900">
                    {item.bid}
                  </div>
                  <div className="text-right font-mono text-gray-900">
                    {item.ask}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Disclaimer */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 leading-relaxed">
                Prices above are indicative only<br />
                Data from Zero.MT5
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Up Button */}
      <ScrollButton></ScrollButton>
      
     
    </div>
  );
}