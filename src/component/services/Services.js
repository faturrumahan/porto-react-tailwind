import React from "react";
import ServiceItems from "./ServiceItems";

const Services = () => {
  return (
    <div className="h-fit lg:h-screen bg-black bg-opacity-40">
      <div className="container mx-auto">
        <div className="flex justify-center lg:justify-start">
          <div className="mt-5 lg:mt-20 text-center lg:text-start">
            <h1 className="mb-5 lg:mb-10 block font-bold text-5xl lg:text-7xl text-white">
              What Can I Do
            </h1>
            <ServiceItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
