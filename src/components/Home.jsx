import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('/background.jpg')] bg-cover bg-no-repeat ">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-backgroundColor font-semibold text-6xl">
          Try our Enriching Dishes!
        </h1>
        <p className="text-backgroundColor">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className=" lg:pl-44 ">
          <Button title="Order Here" />
        </div>
      </div>
    </div>
  );
};

export default Home;
