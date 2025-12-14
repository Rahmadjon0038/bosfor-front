import React, { useState } from "react";

import {
  FaHeart,
  FaPenFancy,
  FaShoppingCart,
  FaTrashAlt,
} from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import NotiModal from "../notifyModal/NotiModal";
import { Tooltip } from "@mui/material";
function AdminClothes() {
  const [clothes, setClothes] = useState([
    {
      id: 1,
      name: "Fudbolka",
      price: 120,
      image:
        "https://frankfurt.apollo.olxcdn.com/v1/files/m2alhzdpywwz1-UZ/image;s=853x1280",
    },
    {
      id: 2,
      name: "Shim",
      price: 180,
      image:
        "https://truewerk.com/cdn/shop/files/t1_werkpants_mens_olive_flat_lay_4825e693-f588-4813-bff0-1d4c46ce82ce.jpg?v=1759203265",
    },
    {
      id: 3,
      name: "Kepka",
      price: 80,
      image:
        "https://i5.walmartimages.com/seo/47-MLB-New-York-Yankees-Baseball-Cap-White-One-Size_2cba527e-de90-4b3f-ba96-36ad9f2fc496.a178d46346f45c579f66ca9eb3c0cbc7.jpeg",
    },
    {
      id: 4,
      name: "Kurtka",
      price: 300,
      image:
        "https://olcha.uz/image/700x700/products/supplier/stores/1/2023-09-10/59V1WWFibdHNsfBxTxOplLZoWUXEuJRf8iGipbOxOioI39IWC997EHU1DdL7.jpg",
    },
    {
      id: 4,
      name: "Kurtka",
      price: 300,
      image:
        "https://olcha.uz/image/700x700/products/supplier/stores/1/2023-09-10/59V1WWFibdHNsfBxTxOplLZoWUXEuJRf8iGipbOxOioI39IWC997EHU1DdL7.jpg",
    },
  ]);
  return (
    <div>
      <button>Kiyim qo'shish</button>
      <div className=" grid grid-cols-5 mb-12 gap-6">
        {clothes?.map((item) => (
          <div
            key={item.id}
            className="border-2 relative border-blue-400 rounded-xl overflow-hidden shadow-2xl"
          >
            <NavLink to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                className="h-[250px] w-full object-cover  mx-auto"
              />
            </NavLink>

            <div className="m-4">
              <h1 className="text-2xl">{item.name}</h1>
              <p className="text-xl">Narxi: {item.price} ming</p>
              <div className="flex gap-6 text-xl mt-6 justify-end">
                <NotiModal
                  message={
                    "Siz bu eloni ochirib tashlamoqchimisiz. agar o'chirib tashlasangiz qayta tiklab bo'lmaydi"
                  }
                  id={item.id}
                >
                  <Tooltip title="O'chirish">
                    <FaTrashAlt className="text-red-400" />
                  </Tooltip>
                </NotiModal>

                <Tooltip title={"Yangilash"}>
                  <FaPenFancy className="text-orange-400" />
                </Tooltip>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminClothes;
