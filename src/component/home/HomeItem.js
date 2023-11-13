import React from "react";
import HomeSocial from "./HomeSocial";

const HomeItem = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center items-center h-screen xl:justify-start">
        <div className="text-center xl:text-start">
          <h1 className="text-white block font-bold text-5xl md:text-7xl">
            Hi, I am Fatur
          </h1>
          <h3 className="text-white block font-light text-l md:text-2xl">
            Undergraduate Informatics Student
          </h3>
          <h3 className="text-white block font-light text-l md:text-2xl">
            Yogyakarta, Indonesia
          </h3>
          <HomeSocial />
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
