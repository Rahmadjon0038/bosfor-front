import React, { useState } from "react";

function Shop() {
  const [clothes, setClothes] = useState([
    {
      id: 1,
      name: "Fudbolka",
      price: 120,
      image:
        "https://frankfurt.apollo.olxcdn.com/v1/files/m2alhzdpywwz1-UZ/image;s=853x1280",
      isliked: false,
    },
    {
      id: 2,
      name: "Shim",
      price: 180,
      image:
        "https://truewerk.com/cdn/shop/files/t1_werkpants_mens_olive_flat_lay_4825e693-f588-4813-bff0-1d4c46ce82ce.jpg?v=1759203265",
      isliked: false,
    },
    {
      id: 3,
      name: "Kepka",
      price: 80,
      image:
        "https://i5.walmartimages.com/seo/47-MLB-New-York-Yankees-Baseball-Cap-White-One-Size_2cba527e-de90-4b3f-ba96-36ad9f2fc496.a178d46346f45c579f66ca9eb3c0cbc7.jpeg",
      isliked: true,
    },
  ]);

  const [shoping, setShoping] = useState(false);
  const rasmiy = (id) => {
    console.log(id);
    setShoping(true);
  };

  const deleted = (id) => {
    console.log(id);
  };

  return (
    <div className="pt-28 pb-20">
      <h1 className="text-2xl">
        Savatingizda <span className="text-gray-500">1 maxsulot bor</span>
      </h1>

      <div className="mt-12 grid-cols-2 grid gap-12">
        {clothes?.map((item) => (
          <div
            key={item.id}
            className="border border-gray-600 p-4 rounded-xl flex gap-6 "
          >
            <div className="text-center">
              <img src={item.image} alt="img" className="w-[200px]" />
              <h1 className="text-2xl">{item.name}</h1>
              <h1 className="text-2xl">Narxi: {item.price} so'm</h1>
            </div>
            <div className="flex gap-6 items-end">
              <button
                onClick={() => rasmiy(item.id)}
                className="  py-2 px-6 text-white cursor-pointer active:scale-95 bg-blue-400 rounded-xl"
              >
                {shoping ? "Tayorlanmoqda" : "Rasmiylashtirish"}
              </button>
              <button
                onClick={() => deleted(item.id)}
                className="  py-2 px-6 text-white cursor-pointer active:scale-95 bg-red-600 rounded-xl"
              >
                Savatdan olib tashlash
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
