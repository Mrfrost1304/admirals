import React from "react";
import { Smile, DollarSign, CreditCard } from "lucide-react";
import BgImage from "../assets/try-demo.webp"; // update path as needed

export default function DemoTrading() {
  const benefits = [
    { icon: <Smile className="w-6 h-6 text-green-600" />, text: "No stress" },
    { icon: <DollarSign className="w-6 h-6 text-green-600" />, text: "No deposit" },
    { icon: <CreditCard className="w-6 h-6 text-green-600" />, text: "No credit card" },
  ];

  return (
    <section
      className="relative  py-16 px-6 md:px-20 lg:px-32 grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 "></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-4">Try demo trading</h2>
        <p className="text-gray-600 mb-6">
          Not sure how to start? We’ve got you! Start practicing trading with virtual funds on the Admirals demo trading account.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-6 py-3 shadow-md text-lg font-medium">
          TRY FREE ON DEMO
        </button>
      </div>

      {/* Right content with benefits */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="shadow-md rounded-2xl w-40 h-32 flex items-center justify-center text-center bg-white"
          >
            <div className="flex flex-col items-center justify-center gap-3">
              {item.icon}
              <p className="text-gray-700 font-medium">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}