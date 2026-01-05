import React, { useState } from "react";
import { GiClothes } from "react-icons/gi";
import { PiPants } from "react-icons/pi";
import { GiRunningShoe, GiBilledCap } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { usegetcategoriess } from "../../hooks/categories";
import Loader from "../Loader/Loader";
function Categories() {

  const { data, isLoading, error } = usegetcategoriess()
  

  return (
    <div className="pt-28 grid grid-cols-4 gap-12">
      {isLoading ? <Loader /> : data?.map((item) => (
        <NavLink to={`/categories/${item.id}`} key={item.id}>
          <div className="bg-gray-100 border-2 border-blue-200 rounded-xl overflow-hidden hover:scale-105 transition duration-300 p-6 cursor-pointer">
            <div className="text-7xl text-center text-blue-400  flex justify-center">
              <img src={item.images} alt="img" />
            </div>
            <h1 className="text-xl text-center  mt-3">{item.name}</h1>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Categories;
