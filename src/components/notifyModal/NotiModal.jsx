import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CgClose } from "react-icons/cg";
import { TiWarningOutline } from "react-icons/ti";
import { useGetNotify } from "../../hooks/Notify";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  height: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 5,
  borderRadius: 6,
};

export default function NotiModal({ children, id, message }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const notify = useGetNotify();
  const deleteCategory = () => {
    notify("ok", `kategoriya o'chirildi ${id}`);
  };

  return (
    <div>
      <button onClick={handleOpen}>{children}</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CgClose
            onClick={handleClose}
            className="text-2xl absolute right-5 top-4"
          />
          <div className="flex justify-center">
            <TiWarningOutline className="text-7xl  text-red-400  " />
          </div>
          <p className="text-2xl text-center mt-4 text-gray-600 ">{message}</p>
          <div className="mt-6 flex justify-center gap-12">
            <button
              onClick={handleClose}
              className="text-xl bg-red-400 cursor-pointer active:scale-95 text-white p-2 rounded-xl"
            >
              Bekor qilish
            </button>
            <button
              onClick={deleteCategory}
              className="text-xl bg-green-400 cursor-pointer active:scale-95 text-white p-2 rounded-xl"
            >
              Tasdiqlash
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
