
import { ArrowUp, MessageCircle, Monitor } from 'lucide-react';
const ScrollButton=()=>{
    return (
        <>
         <div className="fixed bottom-6 left-6">
        <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-full p-3 shadow-lg transition-all duration-200 transform hover:scale-110">
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
      </>
    );

}
export default ScrollButton;