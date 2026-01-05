import React from "react";
import { GiClothes } from "react-icons/gi";
import Clothes from "../components/Clothes/Clothes";
import { useParams } from "react-router-dom";
import { usegetCategoryiD } from "../hooks/categories";
function Categories() {
  const paramdata = useParams();
  console.log(paramdata);


  const { data, isLoading, error } = usegetCategoryiD(paramdata.id);
  console.log(data)
   const categoryData = data


  // const categoryData = {
  //   id: 1,
  //   name: "Kurtkalar va svitrlar",
  //   icon: <GiClothes />,
  //   count: 27,
  // };

  return (
    <div className="pt-28">
      <div className="flex items-center gap-6">
        <div className="bg-blue-400 text-6xl  rounded-full inline-block text-white">
          <img src={categoryData?.images} className="w-36 h-36 rounded-full" alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{categoryData?.name}</h1>
          <p className="text-[14px] text-gray-700 mt-2">
            Bu katalog bo'yicha {categoryData?.count} ta maxsulot topildi
          </p>
        </div>
      </div>
      {/* kiyimlar keladi */}
     <div className="mt-20 grid grid-cols-5 mb-12 gap-6">
      {/* {data?.map((item) => (
        <div className="border-2 relative border-blue-400 rounded-xl overflow-hidden shadow-2xl">
          <span
            onClick={() => likedFunction(item.id, item.isliked)}
            className={`text-2xl absolute right-2 top-2 cursor-pointer ${
              item.isliked ? "text-red-600" : "text-gray-400"
            }`}
          >
            <FaHeart />
          </span>
          <NavLink to={`/product/${item.id}`} key={item.id}>
            <img
              src={item.images[0]}
              alt={item.name}
              className="h-[250px] w-full object-cover  mx-auto"
            />
          </NavLink>

          <div className="m-4">
            <h1 className="text-2xl">{item.name}</h1>
            <p className="text-xl">Narxi: {item.price} ming</p>
            <button className="text-2xl bg-blue-400 hover:bg-blue-600 w-full py-2 flex items-center text-white justify-center mt-4 transition rounded-xl">
              Savatga <FaShoppingCart />
            </button>
          </div>
        </div>
      ))} */}
    </div>
    </div>
  );
}

export default Categories;
