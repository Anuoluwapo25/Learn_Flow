import React from 'react';

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="relative  z-0 w-full h-[80vh] font-montserrat bg-gray-900 text-white py-16">
      <div className="container mt-20 mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-7">
          Unlock Your Potential, Expand Your <br></br>Horizons, and Excel in Tech
        </h1>
        <p className="text-lg mb-20 max-w-3xl mx-auto">
          Learn Flow is a learning management system that gives you all the tools required in <br></br>
          your tech journey. It is comprised of the most resourceful materials one<br></br>
          would ever think of. Have the best experience from us.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#69315E] border border-white hover:bg-[#88407a] text-white px-6 py-2 rounded-md flex items-center">
            Start for free
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-gray-900">
            Partner with us
          </button>
        </div>
        
        {/* Navigation arrows */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <button className="bg-white bg-opacity-20 rounded-full p-2 hover:bg-opacity-30">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <button className="bg-white bg-opacity-20 rounded-full p-2 hover:bg-opacity-30">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
