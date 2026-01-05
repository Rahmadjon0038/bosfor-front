import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CgClose } from "react-icons/cg";
import { Button } from "@mui/material";

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
};

export default function Profile({ userData }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="border px-4 py-2 rounded-2xl" onClick={handleOpen}>
        Profile
      </button>
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
          <h1 className="text-center text-3xl text-blue-400">User Profile</h1>
          <img
            className="rounded-full w-30 mx-auto mt-6"
            src="https://di2ponv0v5otw.cloudfront.net/posts/2025/07/25/688436549f19e292722cbd2a/m_688600e47ac629cab0dd7cbd.jpg"
            alt=""
          />
          <p className="text-2xl text-center mt-4">
            {userData?.first_name} {userData?.username}
          </p>
          <p className="text-xl text-center mt-2">{userData?.email}</p>
        </Box>
      </Modal>
    </div>
  );
}
