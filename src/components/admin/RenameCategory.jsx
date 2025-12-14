import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import React from "react";
import MiniLoader from "../Loader/MiniLoader";
import { useGetNotify } from "../../hooks/Notify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  outline: "none",
};

export default function RenameCategory({ children, category }) {
  // --------------- notify hooks ----------
  const notify = useGetNotify();

  // TABS

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [icontext, seticontext] = useState("");
  const [categoryname, setcategoryname] = useState("");

  // LOADER STATE
  const [loading, setLoading] = useState(false);

  const handleRegisterSumbit = (e) => {
    e.preventDefault();
    const categoryData = {
      icontext,
      categoryname,
    };
    console.log(categoryData);
  };

  return (
    <div>
      <div className="h-full" onClick={handleOpen}>
        {children}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CgClose
            onClick={handleClose}
            className=" absolute text-blue-400 cursor-pointer active:scale-95 right-4 top-4"
            size={20}
          />
          <form onSubmit={handleRegisterSumbit} className="space-y-6">
            <h1 className="text-2xl text-center text-blue-400 font-bold">
              Kategoriya yangilash
            </h1>
            <input
              onChange={(e) => seticontext(e.target.value)}
              className="p-2 border-blue-400 outline-0 border rounded-xl w-full"
              type="file"
              placeholder="Kategoriya uchun rasm"
            />

            <input
              onChange={(e) => setcategoryname(e.target.value)}
              className="p-2 border-blue-400 outline-0 border rounded-xl w-full"
              type="text"
              placeholder="Nomi"
              defaultValue={category.name}
            />
            <button
              className={`py-2 px-8 rounded-xl cursor-pointer ${
                loading
                  ? "active:scale-100 bg-blue-300"
                  : "active:scale-90 bg-blue-400"
              } text-white text-xl flex items-center gap-2`}
              disabled={loading}
            >
              {loading ? <MiniLoader /> : "saqlash"}
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
