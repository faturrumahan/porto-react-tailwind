import React from "react";
import CategoryCard from "../ui/CategoryCard";
import Web from "../../assets/web-dev.jpg";
import Pho from "../../assets/photo.jpg";
import Vid from "../../assets/video.jpg";
import Keeb from "../../assets/keeb-mod.jpg";

const ServiceItems = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-7 lg:mb-0">
      <CategoryCard>
        <img
          src={Web}
          alt="Web Development"
          className="block p-3 rounded-2xl h-[20rem] lg:h-[40rem] w-full object-cover"
        ></img>
        <h3 className="block text-center mb-3 text-lg lg:text-xl">
          Web Development
        </h3>
      </CategoryCard>
      <CategoryCard>
        <img
          src={Pho}
          alt="Photography"
          className="block p-3 rounded-2xl h-[20rem] lg:h-[40rem] w-full object-cover"
        ></img>
        <h3 className="block text-center mb-3 text-lg lg:text-xl">
          Photography
        </h3>
      </CategoryCard>
      <CategoryCard>
        <img
          src={Vid}
          alt="Videography"
          className="block p-3 rounded-2xl h-[20rem] lg:h-[40rem] w-full object-cover"
        ></img>
        <h3 className="block text-center mb-3 text-lg lg:text-xl">
          Videography
        </h3>
      </CategoryCard>
      <CategoryCard>
        <img
          src={Keeb}
          alt="Keyboard Commissions"
          className="block p-3 rounded-2xl h-[20rem] lg:h-[40rem] w-full object-cover"
        ></img>
        <h3 className="block text-center mb-3 text-lg lg:text-xl">
          Keyboard Commission
        </h3>
      </CategoryCard>
    </div>
  );
};

export default ServiceItems;
