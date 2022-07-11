import React from "react";
import AboutPersonal from "./AboutPersonal";
import AboutInterests from "./AboutInterests";

const AboutItem = () => {
  return (
    <div className="flex flex-wrap justify-start xl:justify-center text-white mt-3 xl:mt-7 md:-ml-16 lg:ml-16">
      <AboutPersonal />
      <AboutInterests />
    </div>
  );
};

export default AboutItem;
