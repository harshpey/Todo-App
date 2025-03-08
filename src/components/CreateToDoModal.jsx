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
    <div className="h-lvh w-full flex justify-center items-center">
      <div className="bg-black-light px-6 py-4 flex flex-col gap-20 min-w-[666px]">
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

        <div className="w-full flex justify-between items-center">
          <div className="flex gap-4">
            <div className="bg-modal-light flex items-center justify-between gap-2 px-2 w-[108px] h-[34px]">
              <p className="font-dm text-[12px] text-white">Set Priority</p>
              <img src={dropdown} alt="" className="w-2 h-2" />
            </div>
            <div className="bg-modal-light flex items-center jusitfy-between gap-2 px-2 w-[108px] h-[34px]">
              <p className="font-dm text-[12px] text-white">05/03/2025</p>
              <img src={calendar} alt="" className="w-3 h-3" />
            </div>
            <div className="gap-2 flex">
              <div className="flex rounded-[50px] w-4 h-4 self-center bg-todo-card-three"></div>
              {Colors.map((item, i) => {
                return (
                  <div className={`flex rounded-[50px] w-4 h-4 self-center ${item}`}></div>
                );
              })}
            </div>
          </div>
          <div>
            <img src={send} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateToDoModal;
