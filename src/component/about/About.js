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
              Hello, I'm Fatur. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc viverra leo augue, id bibendum nunc
              facilisis vel. Proin est augue, molestie malesuada urna eu, luctus
              cursus velit. Nam placerat sollicitudin nisi, at interdum felis
              sagittis non. Nam ut nibh sed nisl rhoncus tristique. Praesent eu
              suscipit libero, at efficitur dolor. Sed elementum mollis
              pulvinar.
            </p>
            <p>
              Donec nec gravida turpis. Cras consectetur ante at est lacinia, a
              consectetur lorem sodales. In sodales pharetra diam. Maecenas
              mollis leo id lorem sollicitudin dapibus. Etiam in rhoncus mauris.
              Nunc tristique augue metus. Donec aliquam, nunc et fringilla
              eleifend, tortor dui fringilla mi, non consequat nunc felis vitae
              augue. Proin aliquam lobortis elementum. Integer sit amet erat
              commodo, congue magna et, volutpat dui. Ut velit urna, viverra
              placerat aliquet ut, faucibus ac velit. Aenean et velit laoreet,
              lobortis augue at, laoreet purus. Suspendisse quis mauris metus.
              Mauris arcu diam, laoreet ac risus non, ornare ornare nisi.
              Vivamus varius nunc quis hendrerit condimentum. Morbi ultricies
              semper efficitur. Nullam eget dictum lectus. Duis eu neque nec
              augue scelerisque rhoncus et a tortor. Vivamus in placerat metus.
            </p>
          </div>
        </div>
        <AboutItem />
      </div>
    </div>
  );
};

export default About;
