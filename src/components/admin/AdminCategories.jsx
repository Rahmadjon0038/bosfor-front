import React, { useState } from "react";
import { GiClothes } from "react-icons/gi";
import { PiPants } from "react-icons/pi";
import { GiRunningShoe, GiBilledCap } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import AddCategory from "./AddCategory";
import { GrView } from "react-icons/gr";
import { FaTrashAlt } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";
import { Tooltip } from "@mui/material";
import NotiModal from "../notifyModal/NotiModal";
import RenameCategory from "./RenameCategory";

function AdminCategories() {
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
    <div className="grid grid-cols-4 gap-12">
      <AddCategory>
        <div className="h-full bg-blue-300  border-2 border-blue-200 rounded-xl  hover:scale-105 transition duration-300 p-6 cursor-pointer flex items-center justify-center">
          <BiPlus className="text-6xl text-white " />
        </div>
      </AddCategory>
      {categories?.map((item) => (
        <div
          key={item.id}
          className="bg-gray-100 border-2 border-blue-200 rounded-xl overflow-hidden hover:scale-105 transition duration-300 p-6 cursor-pointer"
        >
          <div className="text-7xl text-center text-blue-400  flex justify-center">
            {item.icon}
          </div>
          <h1 className="text-xl text-center  mt-3">{item.name}</h1>
          <div className="flex gap-6 text-xl mt-6 justify-end">
            <NavLink to={`/categories/${item.name}`}>
              <Tooltip title="Ko'rish">
                <GrView className="text-green-400" />
              </Tooltip>
            </NavLink>

            <NotiModal
              message={` Siz bu kategoriyani o'chib tashlasangiz unga tegishli bo'lgan barcha
            elonlar o'chib ketadi va keyin bu amalni orga qaytarib bo'lmaydi`}
              id={item.id}
            >
              <Tooltip title="O'chirish">
                <FaTrashAlt className="text-red-400" />
              </Tooltip>
            </NotiModal>

            <RenameCategory category={item}>
              <Tooltip title={"Yangilash"}>
                <FaPenFancy className="text-orange-400" />
              </Tooltip>
            </RenameCategory>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminCategories;
