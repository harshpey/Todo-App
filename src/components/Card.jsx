import React from "react";
import ellipsis from "../assets/ellipsis.png";
import clock from "../assets/clock.png";

const Card = () => {
  const Colors = [
    "bg-todo-card",
    "bg-todo-card-one",
    "bg-todo-card-two",
    "bg-todo-card-three",
    "bg-todo-card-four",
  ];

  const generateColor = () => {
    return Colors[Math.floor(Math.random() * Colors.length)];
  };

  console.log(generateColor());

  return (
    <div className={`flex flex-col gap-4 w-[286px] p-4 relative ${generateColor()}`}>
      <div className="flex justify-between">
        <input
          type="checkbox"
          className={`rounded-[25px] border border-black`}
        />
        <img src={ellipsis} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo quos
        quis necessitatibus nulla iste aliquam deleniti velit, reprehenderit
        consequatur?
      </p>
      <div className="flex justify-between">
        <div className="flex gap-2 text-center">
          <img src={clock} alt="" className="w-[15px] h-[15px] self-center" />
          <p className="font-dm">03/04/2025</p>
        </div>
        <div className="bg-white">
          <span className="text-[14px] p-2 font-dm">High Priority</span>
        </div>
      </div>
      <div className="bg-black-light w-[100px] absolute right-6 top-10">
        <p className="text-white font-dm font-[200] text-[14px] py-1 ml-2">Edit</p>
        <hr className="border-border-light-color"/>
        <p className="text-white font-dm font-[200] text-[14px] py-1 ml-2">Delete</p>
      </div>
    </div>
  );
};

export default Card;
