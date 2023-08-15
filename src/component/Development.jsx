import React from "react";
import leptop from "../assets/laptop.jpg";

const Development = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={leptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            Web developer Dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Website With Desktop
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            accusantium modi quo voluptate, rerum praesentium soluta eius
            quisquam! Natus eligendi ea delectus hic temporibus laboriosam
            reiciendis sit explicabo ipsum aperiam.
          </p>
          <button className="text-[#00df9a] w-[200px] md:mx-0 rounded-md font-medium my-6 mx-auto py-3 bg-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Development;
