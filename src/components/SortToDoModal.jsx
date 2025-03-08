import React from 'react'
import calendar from "../assets/calendar.png";
import cross from "../assets/cross.png";

const SortToDoModal = () => {
  const Colors = [
    "bg-todo-card",
    "bg-todo-card-one",
    "bg-todo-card-two",
    "bg-todo-card-three",
    "bg-todo-card-four",
  ];
  return (
    <div>
       <div className="h-lvh w-full flex justify-center items-center">
            <div className="bg-black-light px-6 py-4 flex flex-col gap-6 min-w-[666px]">
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="font-dm font-medium text-white">Edit</span>
                </div>
                <img src={cross} alt="" className="w-[24px] h-[24px]" />
              </div>
      
              <div className="flex flex-col gap-3">
                <label htmlFor="" className="text-todo-text-inactive font-dm">
                  Priority
                </label>
                <div className="flex gap-4">
                <div className="bg-white flex items-center justify-between gap-2 font-dm font-semibold px-8 py-2 rounded-[4px]">
                    <p className="font-dm text-[14px] text-black">All</p>
                  </div>
                  <div className="bg-black-light flex items-center justify-between gap-2 font-dm font-semibold px-8 py-2 border border-todo-text-inactive  rounded-[4px]">
                    <p className="font-dm text-[14px] text-todo-text-inactive">Low</p>
                  </div>
                  <div className="bg-black-light flex items-center jusitfy-between gap-2 font-dm font-semibold px-8 py-2 border border-todo-text-inactive  rounded-[4px]">
                    <p className="font-dm text-[14px] text-todo-text-inactive">Medium</p>
                  </div>
                  <div className="bg-black-light flex items-center jusitfy-between gap-2 font-dm font-semibold px-8 py-2 border border-todo-text-inactive  rounded-[4px]">
                    <p className="font-dm text-[14px] text-todo-text-inactive">High</p>
                  </div>
                </div>
                <p className="text-todo-text-inactive font-dm">Date</p>
                <div className="flex items-center jusitfy-between gap-2  w-[108px]">
                  <p className="font-dm text-[14px] text-todo-text-inactive">05/03/2025</p>
                  <img src={calendar} alt="" className="w-3 h-3" />
                </div>
              </div>
      
              <div>
                <div className="gap-2 flex mt-4">
                  <div className="flex rounded-[50px] w-4 h-4 self-center bg-todo-card-three"></div>
                  {Colors.map((item, i) => {
                    return (
                      <div
                        className={`flex rounded-[50px] w-4 h-4 self-center ${item}`}
                      ></div>
                    );
                  })}
                </div>
                <button className="text-black font-dm bg-save-button-color px-8 py-2 my-8 font-medium">
                  Apply
                </button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default SortToDoModal
