import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Register",
      description: "Sign up with your name and email address to start trading",
      color: "blue"
    },
    {
      number: "2", 
      title: "Fund",
      description: "Start trading from $25",
      color: "teal"
    },
    {
      number: "3",
      title: "Trade", 
      description: "Log in and start trading more than 500 instruments!",
      color: "green"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        number: "text-blue-600",
        border: "border-blue-300",
        bg: "bg-blue-50"
      },
      teal: {
        number: "text-teal-600", 
        border: "border-teal-300",
        bg: "bg-teal-50"
      },
      green: {
        number: "text-green-600",
        border: "border-green-300", 
        bg: "bg-green-50"
      }
    };
    return colorMap[color];
  };

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
            How it works
          </h2>
        </div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {steps.map((step, index) => {
            const colors = getColorClasses(step.color);
            return (
              <div key={index} className="text-center">
                {/* Step Number Circle */}
                <div className="flex justify-center mb-8">
                  <div className={`w-20 h-20 rounded-full border-2 ${colors.border} ${colors.bg} flex items-center justify-center`}>
                    <span className={`text-3xl font-bold ${colors.number}`}>
                      {step.number}
                    </span>
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
            SIGN UP FOR FREE
          </button>
        </div>
      </div>
    </div>
  );
}