import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        About Our Restaurant
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl">
        Welcome to <span className="font-semibold">Food Web</span>, where
        passion meets flavor! Our restaurant is dedicated to serving{" "}
        <span className="font-semibold">delicious, high-quality dishes</span>{" "}
        made with the freshest ingredients. Whether you’re craving comforting
        classics, gourmet delights, or indulgent desserts, we have something for
        every palate.
      </p>
      <p className="text-lg text-gray-600 text-center max-w-2xl mt-4">
        At <span className="font-semibold">Food Web</span>, we believe that
        dining is more than just a meal—it’s an experience. Our warm and
        inviting atmosphere, combined with exceptional service, ensures that
        every visit is a memorable one.
      </p>
      <p className="text-lg text-gray-600 text-center max-w-2xl mt-4">
        Join us for an unforgettable culinary journey, where
        <span className="italic"> every bite tells a story!</span> 🍽️✨
      </p>
    </div>
  );
};

export default About;
