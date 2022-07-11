import React, { useState } from "react";
import PortosFilter from "./PortosFilter";
import PortosList from "./PortosList";

const Portos = (props) => {
  const [filteredWorks, setFilteredWorks] = useState("web");

  const filterChangeHandler = (selectedWorks) => {
    setFilteredWorks(selectedWorks);
  };

  const filteredItems = props.items.filter((work) => {
    return work.category === filteredWorks;
  });

  return (
    <div className="h-fit lg:h-screen bg-[#121212]">
      <div className="container mx-auto">
        <div className="flex justify-center lg:justify-end">
          <div className="mt-5 lg:mt-20">
            <h1 className="mb-3 lg:mb-5 text-white block font-bold text-5xl lg:text-7xl">
              My Works
            </h1>
            <div className="flex justify-center lg:justify-end mb-5 lg:mb-10">
              <PortosFilter
                selected={filteredWorks}
                onChangeCategory={filterChangeHandler}
              />
            </div>
          </div>
        </div>
        <PortosList items={filteredItems} />
      </div>
    </div>
  );
};

export default Portos;
