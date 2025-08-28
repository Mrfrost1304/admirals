import { MessageCircle } from "lucide-react";
import zeroWave from "../assets/zero-wave.png"; // your 0+wave image

export default function CommissionFreeSection() {
  return (
    <section className="relative bg-[#f5f9ff] overflow-hidden min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* Left side (big image full height + terms) */}
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center lg:items-start h-full relative">
            <img
              src={zeroWave}
              alt="Zero commission investing"
              className="h-full w-auto object-contain max-h-[80vh]"
            />
           
          </div>

          {/* Right side (text + button) */}
          <div className="order-1 lg:order-2 flex flex-col justify-center space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
              Commission-Free <br />
              Global Stock Markets
            </h1>

            <p className="text-base lg:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
              Invest in a diverse range of stocks and ETFs from the US,
              EU, and UK markets without having to worry about commission
              fees. This means you can maximise your investment potential
              while keeping your costs low, allowing you to build a robust
              portfolio with ease.*
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md text-base transition-all duration-200">
              Start Investing
            </button>
          </div>
        </div>
      </div>

   
    </section>
  );
}
