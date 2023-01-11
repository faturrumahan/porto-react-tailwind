import React from "react";
import AboutItem from "./AboutItem";
import Avatar from "../../assets/avatar.png";

const About = () => {
  return (
    <div className="h-fit xl:h-screen bg-[#121212]">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center xl:justify-end">
          <div className="mt-5 xl:mt-20">
            <div className="my-5 xl:my-10">
              <h1 className=" text-white block font-bold text-5xl lg:text-7xl">
                About Me
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap xl:flex-nowrap justify-start">
          <div className="-mt-5 xl:-mt-24">
            <img
              src={Avatar}
              alt="avatar"
              className="max-w-full md:ml-20 lg:-ml-20 xl:max-w-xl xl:mx-auto"
            ></img>
          </div>
          <div className="text-white mt-3 text-center xl:text-left text-xs xl:text-base px-3 md:px-0">
            <p>
              Hello, I am Fathurrohman but some people also known me as faturrumahan, like my instagram username. For now, I am an undergraduate informatics student at UPN "Veteran" Yogyakarta. I have an interest in the web-development field, especially front-end and back-end. Recently I study React JS for front-end and Laravel for back-end and full-stack.
            </p>
            <p>
              Other than that, I also love visual art such as photography and videography, listening to some kind of music, doing workouts like running and cycling, and following trends about technology.
            </p>
          </div>
        </div>
        <AboutItem />
      </div>
    </div>
  );
};

export default About;
