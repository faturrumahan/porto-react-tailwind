import React from "react";
import PortoItems from "./PortoItems";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PortosList = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  if (props.items.length === 0) {
    return <h2 className="text-white">No Works Found!</h2>;
  }

  return (
    <div>
      <Carousel responsive={responsive}>
        {props.items.map((work) => (
          <PortoItems
            key={work.id}
            name={work.name}
            desc={work.desc}
            link={work.link}
            img={work.img}
            tags={work.tags}
          />
        ))}
      </Carousel>
    </div>
  );

  // return (
  //   <div className="flex justify-center">
  //     <div className="grid grid-flow-col auto-cols-[minmax(1,_4fr)] gap-3 ">
  //       {props.items.map((work) => (
  //         <PortoItems
  //           key={work.id}
  //           name={work.name}
  //           desc={work.desc}
  //           link={work.link}
  //           img={work.img}
  //           tags={work.tags}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default PortosList;
