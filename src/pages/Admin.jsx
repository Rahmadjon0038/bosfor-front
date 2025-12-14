import React, { useState } from "react";
import AdminCategories from "../components/admin/AdminCategories";
import AdminClothes from "../components/admin/AdminClothes";

function Admin() {
  const [tabs, setTabs] = useState(2);

  return (
    <div className="pt-28">
      <div className="flex gap-12">
        <div
          onClick={() => setTabs(1)}
          className={`${
            tabs == 1 ? "bg-blue-400 text-white" : ""
          } text-xl border-2 border-blue-400 p-4 w-[300px] text-center cursor-pointer hover:bg-blue-400 hover:text-white transition duration-300 rounded-2xl`}
        >
          Kategoriyalar
        </div>
        <div
          onClick={() => setTabs(2)}
          className={`${
            tabs == 2 ? "bg-blue-400 text-white" : ""
          } text-xl border-2 border-blue-400 p-4 w-[300px] text-center cursor-pointer hover:bg-blue-400 hover:text-white transition duration-300 rounded-2xl`}
        >
          Elonlar
        </div>
      </div>

      {tabs == 1 ? (
        <div className="p-2 mt-12">
          <AdminCategories />
        </div>
      ) : (
        <div className="p-2 mt-12">
          <AdminClothes />
        </div>
      )}
    </div>
  );
}

export default Admin;
