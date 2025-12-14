import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <img
        className="mx-auto w-[700px]"
        src="https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk="
      />
      <div className="text-center ">
        <h1 className="text-5xl mt-[1%] text-red-600">Not Found</h1>
        <h2 className="text-4xl mt-4 text-blue-900">Sahifa topilmadi</h2>
        <NavLink to={"/"}>
          <button className="border-2 border-red-500 px-5 py-3 rounded-2xl mt-4 text-red-800">
            Bosh sahifaga qaytish
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
