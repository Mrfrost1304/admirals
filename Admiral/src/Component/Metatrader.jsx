
import { ArrowUp, MessageCircle, Monitor } from 'lucide-react';
import trade from '../assets/tab-1.webp'

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
          
         <img src={trade}></img>
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