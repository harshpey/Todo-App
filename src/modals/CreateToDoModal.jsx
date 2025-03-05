import React from "react";
import calendar from "../assets/calendar.png";
import send from "../assets/Frame 1000003523.png";
import cross from "../assets/cross.png";
import dropdown from "../assets/dropdown.png";

const CreateToDoModal = () => {
  const Colors = [
    "bg-todo-card",
    "bg-todo-card-one",
    "bg-todo-card-two",
    "bg-todo-card-three",
    "bg-todo-card-four",
  ];
  return (
    <div className="top-1/2 fixed inset-24 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black-light px-6 py-4 flex flex-col gap-20">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <span className="font-dm font-medium text-white">Title</span>
          <input
            type="text"
            placeholder="Write here"
            className="w-[400px] bg-black-light border-none text-modal-input-text p-0"
          />
        </div>
        <img src={cross} alt="" className="w-[24px] h-[24px]" />
      </div>

      <div className="w-full flex justify-between">
        <div className="flex gap-4">
          <div className="bg-modal-light flex items-center gap-2 p-1108px] w-[108px] h-[34px]">
            <p className="font-dm text-[12px] text-white">Set Priority</p>
            <img src={dropdown} alt="" className="w-2 h-2" />
          </div>
          <div className="bg-modal-light flex items-center gap-2 px-1 py-0">
            <p className="font-dm text-[12px] text-white">05/03/2025</p>
            <img src={calendar} alt="" className="w-3 h-3" />
          </div>
          <div>
            {Colors.map((item, i) => {
              <div className={`rounded-[25px] w-2 h-2 ${item}`}></div>;
            })}
          </div>
        </div>
        <div>
          <img src={send} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CreateToDoModal;
