import React from "react";
import Header from "../components/Header";
import right_arrow from "../assets/right-arrow.png";
import Card from "../components/Card";

const ListManager = () => {
  return (
    <>
      <Header />
      <div className="h-[calc(100vh-66px)] py-4 bg-black-light flex flex-col gap-4 px-10">
        <div className="flex justify-between w-full bg-todo-card  max-w-[900px] mx-auto h-[165px] p-12">
          <div className="">
            <p className="font-dm text-[24px] font-bold">Welcome to your</p>
            <p className="font-dm text-[40px] font-bold">To-Do List Manager</p>
          </div>
          <button className="flex gap-4 bg-black text-white items-center px-8">
            <p className="font-dm inline">Create To-Do</p>
            <img src={right_arrow} alt="" className="w-[18px] h-[16px]" />
          </button>
        </div>
        <div className="flex gap-4 self-center min-w-[900px]">
          <p className="text-todo-text-color font-bold text-[30px] border-b-2 border-todo-text-color">
            My Task
          </p>
          <p className="text-todo-text-inactive font-semibold text-[30px]">
            Completed
          </p>
        </div>
        <div className="max-w-[900px] w-full self-center flex">
          <Card />
        </div>
      </div>
    </>
  );
};

export default ListManager;
