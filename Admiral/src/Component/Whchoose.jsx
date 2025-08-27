
import { ArrowUp, Shield, Briefcase, ArrowRight } from 'lucide-react';

export default function WhyChooseAdmirals() {
  const features = [
    {
      icon: <div className="relative">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full relative">
            <div className="absolute top-0.5 left-0.5 w-2 h-2 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>,
      title: "Support at Your Fingertips",
      description: "Get personalized support with multilingual assistance via phone, email, and live chat"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Funds are secured",
      description: "All client deposits are kept separate from our own operating funds. Client money is held in designated client bank accounts, ensuring it is protected and segregated from our own funds"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-500" />,
      title: "Start from $25",
      description: "You can start trading from $25",
      hasAction: true
    }
  ];

  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
            Why choose Admirals?
          </h2>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Action Button for Start from $25 */}
                {feature.hasAction && (
                  <div className="pt-4">
                    <button className="inline-flex items-center space-x-2 text-green-500 hover:text-green-600 font-semibold transition-colors duration-200 group">
                      <span>START NOW</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll Up Button */}
      <div className="fixed bottom-6 left-6">
        <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-full p-3 shadow-lg transition-all duration-200 transform hover:scale-110">
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
      
      {/* Live Chat Button */}
    
    </div>
  );
}