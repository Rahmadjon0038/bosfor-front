import React, { useState } from "react";
import { GiClothes } from "react-icons/gi";
import { PiPants } from "react-icons/pi";
import { GiRunningShoe, GiBilledCap } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Kurtkalar va svitrlar",
      icon: <GiClothes />,
    },
    {
      id: 2,
      name: "Shimlar va shalvarlar",
      icon: <PiPants />,
    },
    {
      id: 3,
      name: "Oyoq kiyimlar",
      icon: <GiRunningShoe />,
    },
    {
      id: 4,
      name: "Bosh kiyimlar",
      icon: <GiBilledCap />,
    },
  ]);

  return (
    <div className="pt-28 grid grid-cols-4 gap-12">
      {categories?.map((item) => (
        <NavLink to={`/categories/${item.name}`} key={item.id}>
          <div className="bg-gray-100 border-2 border-blue-200 rounded-xl overflow-hidden hover:scale-105 transition duration-300 p-6 cursor-pointer">
            <div className="text-7xl text-center text-blue-400  flex justify-center">
              {item.icon}
            </div>
            <h1 className="text-xl text-center  mt-3">{item.name}</h1>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Categories;
