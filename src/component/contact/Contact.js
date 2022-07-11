import React from "react";
import ContactItems from "./ContactItems";

const Contact = () => {
  return (
    <div className="h-screen bg-black bg-opacity-40">
      <div className="container mx-auto">
        <div className="flex justify-center lg:justify-start">
          <div className="mt-5 lg:mt-20 text-center lg:text-start">
            <h1 className="mb-5 lg:mb-10 block font-bold text-5xl lg:text-7xl text-white">
              Contact
            </h1>
            <ContactItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
