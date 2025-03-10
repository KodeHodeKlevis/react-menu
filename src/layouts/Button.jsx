import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" px-5 py-1 border-4 border-brightColor text-brightColor hover:bg-brightColor hover:text-white hover transition-all rounded-full">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
