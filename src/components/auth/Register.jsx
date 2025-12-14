import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BiCloset } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import React from "react";
import MiniLoader from "../Loader/MiniLoader";
import { useGetNotify } from "../../hooks/Notify";
import { uselogin, useRegister } from "../../hooks/auth";

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

export default function Register({ children }) {
  // --------------- notify hooks ----------
  const notify = useGetNotify();

  // ----------------- register hook ----------
  const registerMutation = useRegister();

  // ---------------login  hook -----------
  const loginMutation = uselogin();

  // TABS
  const [tab, setTab] = useState("register");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [username, setUsername] = useState("");
  const [firstname, setfirstname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // LOADER STATE
  const [loading, setLoading] = useState(false);

  const handleRegisterSumbit = (e) => {
    e.preventDefault();
    const registerData = {
      username,
      first_name: firstname,
      email,
      password,
    };
    if (password.length < 6) {
      notify("err", "Parol kamida 6 ta belgi");
    } else {
      registerMutation.mutate(registerData);

      // setLoading(true);

      // setTimeout(() => {
      //   setLoading(false);
      //   notify("ok", "Ro'yhatdan o'tish mofaqqiyatli");
      // }, 2000);
    }
  };

  // --------------- login function -------------
  const handleLoginSumbit = (e) => {
    e.preventDefault();
    const logindata = {
      username,
      password,
    };
    if (password.length < 6) {
      notify("err", "Parol kamida 6 ta belgi");
    } else {
      loginMutation.mutate(logindata);
      // setLoading(true);
      // setTimeout(() => {
      //   setLoading(false);
      //   notify("ok", "Tizimga kirish   mofaqqiyatli");
      // }, 2000);
    }
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
        {tab == "register" ? (
          <Box sx={style}>
            <CgClose
              onClick={handleClose}
              className=" absolute text-blue-400 cursor-pointer active:scale-95 right-4 top-4"
              size={20}
            />
            <form onSubmit={handleRegisterSumbit} className="space-y-6">
              <h1 className="text-2xl text-center text-blue-400 font-bold">
                Ro'yhatdan o'tish
              </h1>
              <input
                onChange={(e) => setUsername(e.target.value)}
                className="p-2 border-blue-400 outline-0 border rounded-xl w-full"
                type="text"
                placeholder="Ism"
              />
              <input
                onChange={(e) => setfirstname(e.target.value)}
                className="p-2 border-blue-400 outline-0 border rounded-xl w-full"
                type="text"
                placeholder="familiya"
              />
              <input
                onChange={(e) => setemail(e.target.value)}
                className="p-2 border-blue-400 outline-0 border rounded-xl w-full"
                type="email"
                placeholder="email manzil"
              />
              <input
                onChange={(e) => setpassword(e.target.value)}
                className="p-2 border-blue-400 outline-0 border rounded-xl w-full"
                type="password"
                placeholder="parol"
              />
              <button
                className={`py-2 px-8 rounded-xl cursor-pointer ${
                  loading
                    ? "active:scale-100 bg-blue-300"
                    : "active:scale-90 bg-blue-400"
                } text-white text-xl flex items-center gap-2`}
                disabled={loading}
              >
                {loading ? <MiniLoader /> : "Yuborish"}
              </button>
              <p className="text-center">
                Ro'yhatdan o'tganmisiz
                <a
                  onClick={() => setTab("login")}
                  className="text-blue-500"
                  href="#"
                >
                  Login
                </a>
              </p>
            </form>
          </Box>
        ) : (
          <Box sx={style}>
            <CgClose
              onClick={handleClose}
              className=" absolute text-blue-400 cursor-pointer active:scale-95 right-4 top-4"
              size={20}
            />
            <form onSubmit={handleLoginSumbit} className="space-y-6">
              <h1 className="text-2xl text-center text-blue-400 font-bold">
                Login
              </h1>
              <input
                onChange={(e) => setUsername(e.target.value)}
                className="p-2 border-blue-400 outline-0 border rounded-xl w-full"
                type="text"
                placeholder="Ism"
              />

              <input
                onChange={(e) => setpassword(e.target.value)}
                className="p-2 border-blue-400 outline-0 border rounded-xl w-full"
                type="password"
                placeholder="parol"
              />
              <button
                className={`py-2 px-8 rounded-xl cursor-pointer ${
                  loading
                    ? "active:scale-100 bg-blue-300"
                    : "active:scale-90 bg-blue-400"
                } text-white text-xl flex items-center gap-2`}
                disabled={loading}
              >
                {loading ? <MiniLoader /> : "Yuborish"}
              </button>
              <p className="text-center">
                Ro'yhatdan o'tmaganmisiz
                <a
                  onClick={() => setTab("register")}
                  className="text-blue-500"
                  href="#"
                >
                  Register
                </a>
              </p>
            </form>
          </Box>
        )}
      </Modal>
    </div>
  );
}
