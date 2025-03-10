import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "./Button";

const DishesCard = ({ img, title, price, description }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md text-center">
      <img
        src={img}
        alt={title}
        className="w-full h-44 object-cover rounded-md"
      />
      <h3 className="font-semibold text-lg mt-2">{title}</h3>
      <p className=" text-gray-600 text-center px-2 ">{description}</p>
      <div className="flex justify-center gap-1 my-2">
        <BsStarFill className="text-yellow-500" />
        <BsStarFill className="text-yellow-500" />
        <BsStarFill className="text-yellow-500" />
        <BsStarFill className="text-yellow-500" />
        <BsStarHalf className="text-yellow-500" />
      </div>

      <p className="text-lg font-bold">{price}</p>
      <Button title="Buy Now" />
    </div>
  );
};

export default DishesCard;
