import React from "react";
import { GiClothes } from "react-icons/gi";
import Clothes from "../components/Clothes/Clothes";
import { useParams } from "react-router-dom";
function Categories() {
  const paramdata = useParams();
  console.log(paramdata);

  const categoryData = {
    id: 1,
    name: "Kurtkalar va svitrlar",
    icon: <GiClothes />,
    count: 27,
  };

  return (
    <div className="pt-28">
      <div className="flex items-center gap-6">
        <div className="bg-blue-400 text-6xl p-8 rounded-full inline-block text-white">
          {categoryData?.icon}
        </div>
        <div>
          <h1 className="text-3xl font-bold">{categoryData?.name}</h1>
          <p className="text-[14px] text-gray-700 mt-2">
            Bu katalog bo'yicha {categoryData?.count} ta maxsulot topildi
          </p>
        </div>
      </div>
      {/* kiyimlar keladi */}
      <Clothes />
    </div>
  );
}

export default Categories;
