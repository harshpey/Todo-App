import React from "react";
import book_todo from "../assets/book-todo.png";
import group from "../assets/Group.png";
import google_icon from "../assets/google-icon.png";
import { Link } from "react-router-dom";
import Signup from "./Signup";

const Login = () => {
  return (
    <div className="grid grid-cols-2 items-center bg-black-light h-screen gap-10 max-[880px]:grid max-[880px]:grid-cols-1 max-[880px]:items-center max-[880px]:w-full max-[880px]:px-6">
      <div className="justify-self-center max-[880px]:hidden">
        <img src={book_todo} alt="" className="object-contain h-550" />
      </div>
      <div className="flex p-6 max-[880px]:w-full max-[880px]:justify-center">
        <form
          action=""
          className="flex flex-col gap-2 w-96 max-[880px]:flex max-[880px]:items-stretch "
        >
          <div className="flex items-center gap-4">
            <img src={group} alt="" />
            <p className="text-white font-semibold text-3xl ">To-Do List</p>
          </div>
          <h3 className="text-white font-dm font-bold text-5xl">
            Login to access TO-DO List
          </h3>
          <div>
            <label htmlFor="email" className="text-text-color block">
              Email
            </label>
            <input
              type="email"
              className="w-full h-44 bg-black-light border border-border-color"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-text-color block">
              Password
            </label>
            <input
              type="password"
              className="w-full h-44 bg-black-light border border-border-color"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="border border-border-color bg-black-light self-center"
              />
              <p className="text-text-color">Remember me</p>
            </div>
            <p className="text-text-color">Forget Password?</p>
          </div>
          <div className="flex flex-col gap-4">
            <button className="text-black-light bg-magenta-light align-middle h-50">
              Sign in
            </button>
            <p className="text-text-color text-center">or</p>
            <button className="flex text-text-color gap-4 items-center border border-border-color h-50 text-center justify-center">
              <img src={google_icon} alt="" />
              Signin with Google
            </button>
            <p className="text-text-color">
              Don't have an account?
              <span className="text-magenta-light text-base underline">
                {" "}
                <Link to="signup">Create an account</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
