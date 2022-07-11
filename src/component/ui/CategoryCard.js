import React from "react";

const CategoryCard = (props) => {
  return (
    <div className="bg-white max-w-sm md:w-[22rem] h-[23rem] lg:h-full rounded-xl overflow-hidden mx-5 md:mx-0">
      {props.children}
    </div>
  );
};

export default CategoryCard;
