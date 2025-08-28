

import image2 from '../assets/image2.png';
import ScrollButton from './ScrollButton';

export default function GetInTouchSection() {
  return (
    <section className="bg-white py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Phone image */}
          <div className="flex justify-center lg:justify-center relative">
            <div className="relative">
              {/* Phone image using your imported image */}
              <img 
                src={image2}
                
                alt="Admirals mobile app showing Hello screen"
                className="h-auto "
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 lg:pl-8">
            <h2 className="text-6xl font-light text-gray-900 leading-tight">
              Get in touch
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              More questions? Contact us today!
            </p>

            <div className="pt-2">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>

      
      

     
    </section>
  );
}