import React, { useState } from "react";

import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useGetNotify } from "../../hooks/Notify";
import { usegetAllproducts } from "../../hooks/product";
function Clothes() {
  const notify = useGetNotify();

  const   { data, isLoading, error } = usegetAllproducts()



  // const [clothes, setClothes] = useState([
  //   {
  //     id: 1,
  //     name: "Fudbolka",
  //     price: 120,
  //     image:
  //       "https://frankfurt.apollo.olxcdn.com/v1/files/m2alhzdpywwz1-UZ/image;s=853x1280",
  //     isliked: false,
  //   },
  //   {
  //     id: 2,
  //     name: "Shim",
  //     price: 180,
  //     image:
  //       "https://truewerk.com/cdn/shop/files/t1_werkpants_mens_olive_flat_lay_4825e693-f588-4813-bff0-1d4c46ce82ce.jpg?v=1759203265",
  //     isliked: false,
  //   },
  //   {
  //     id: 3,
  //     name: "Kepka",
  //     price: 80,
  //     image:
  //       "https://i5.walmartimages.com/seo/47-MLB-New-York-Yankees-Baseball-Cap-White-One-Size_2cba527e-de90-4b3f-ba96-36ad9f2fc496.a178d46346f45c579f66ca9eb3c0cbc7.jpeg",
  //     isliked: true,
  //   },
  //   {
  //     id: 4,
  //     name: "Kurtka",
  //     price: 300,
  //     image:
  //       "https://olcha.uz/image/700x700/products/supplier/stores/1/2023-09-10/59V1WWFibdHNsfBxTxOplLZoWUXEuJRf8iGipbOxOioI39IWC997EHU1DdL7.jpg",
  //     isliked: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Kurtka",
  //     price: 300,
  //     image:
  //       "https://olcha.uz/image/700x700/products/supplier/stores/1/2023-09-10/59V1WWFibdHNsfBxTxOplLZoWUXEuJRf8iGipbOxOioI39IWC997EHU1DdL7.jpg",
  //     isliked: true,
  //   },
  // ]);

  const likedFunction = (id, isliked) => {
    const liked = !isliked;
    liked
      ? notify("ok", "sevimlilarga qo'shildi")
      : notify("ok", "sevimlilardan olib tashlandi");

    console.log({ id, isliked: liked });
  };
  return (
    <div className="mt-20 grid grid-cols-5 mb-12 gap-6">
      {data?.map((item) => (
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
      ))}
    </div>
  );
}

export default Clothes;
