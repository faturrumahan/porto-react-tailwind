import React from "react";

const AboutPersonal = () => {
  return (
    <div className="xl:w-1/2 mx-auto xl:mx-0">
      <h3 className="font-semibold text-xl xl:text-3xl text-center xl:text-start">
        Personal Details
      </h3>
      <div className="grid grid-cols-2 gap-2 mt-3 text-xs xl:text-base px-3 xl:px-0 text-center xl:text-start">
        <p>Full Name</p>
        <p className="-ml-8 xl:-ml-48">Fathurrohman</p>
        <p>Birth Date</p>
        <p className="-ml-8 xl:-ml-48">November 2000</p>
        <p>Email</p>
        <p className="-ml-8 xl:-ml-48">Fathurrohman.work@gmail.com</p>
        <p>Education</p>
        <p className="-ml-8 xl:-ml-48">Undergraduate Informatics Student</p>
      </div>
    </div>
  );
};

export default AboutPersonal;
