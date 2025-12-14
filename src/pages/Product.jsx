import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  const productData = {
    name: "Yozgi fudbolkalar",
    price: 125000,
    count: 60,
    images: [
      "https://wallpapers.com/images/high/clothes-on-dark-brown-hangers-mmevqezoafngw0cy.webp",
      "https://wallpapers.com/images/high/different-shades-of-blue-jeans-tyxp5ixg40ajkbnr.webp",
      "https://wallpapers.com/images/high/noak-camden-slim-premium-suit-ea6zq4xtml1ricxi.webp",
      "https://wallpapers.com/images/high/man-in-suit-sitting-on-yellow-stairs-t6d0n8c28b1nkzu8.webp",
    ],
  };

  const [selectImg, setSelectImg] = useState(productData?.images[0]);

  return (
    <div className="pt-28">
      <h1 className="text-3xl">{productData?.name}</h1>
      <div className="my-8 productgrid">
        <div className="grid-span border-2 h-[600px] border-gray-400 rounded-2xl  overflow-hidden">
          <img
            src={selectImg}
            className="w-full h-full  object-cover"
            alt="image"
          />
        </div>

        <div className="border-2 border-gray-400 rounded-2xl p-6">
          <h1 className="text-3xl font-bold text-blue-400">
            {productData?.name}
          </h1>
          <h1 className="text-2xl mt-3 font-bold text-blue-400">
            Narxi {productData?.price} So'm
          </h1>
          <button className="mt-3 bg-blue-400 text-xl px-6 py-2 text-white rounded-xl cursor-pointer active:scale-95">
            Savatga solish
          </button>
          <p className="my-4 ">{productData?.count} ta mavjud</p>

          {/* gallery tabs */}

          <div className="grid grid-cols-2 gap-3">
            {productData?.images?.map((item) => (
              <div
                className="border-4 rounded-2xl overflow-hidden border-blue-500 cursor-pointer active:scale-90"
                key={item}
              >
                <img
                  onClick={() => setSelectImg(item)}
                  src={item}
                  alt="item"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
