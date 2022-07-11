import React from "react";

const PortoItems = (props) => {
  return (
    <div className="mb-5 lg:mb-0 text-center">
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-5 md:mx-2">
          <img
            className="w-[400px] h-[200px] md:h-[300px] lg:h-[400px] object-cover"
            src={props.img}
            alt={props.name}
          ></img>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.name}</div>
            <p className="text-gray-700 text-base">{props.desc}</p>
          </div>
          <div className="px-6 pt-1 pb-2 mb-3">
            {props.tags.map((tag) => (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default PortoItems;
