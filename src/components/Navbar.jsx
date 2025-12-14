import React, { useState } from "react";
import {
  FaHeart,
  FaRegUserCircle,
  FaShoppingCart,
  FaUserTie,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Register from "./auth/Register";
import { NavLink, useNavigate } from "react-router-dom";
import Profile from "./auth/Profile";
import Logo from "../assets/react.svg";
import { useGetUsers } from "../hooks/user";

function Navbar() {
  const { data } = useGetUsers();
  const role = data?.role;

  const nav = useNavigate();
  const homeNavigate = () => nav("/");

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="z-50 bg-blue-400 text-white py-4 px-6 md:px-12 flex justify-between items-center fixed w-full left-0">
      {/* Logo */}
      <img
        onClick={homeNavigate}
        className="w-10 md:w-12 cursor-pointer"
        src={Logo}
        alt="Logo"
      />

      {/* Search bar (desktop only) */}
      <div className="hidden md:block">
        <input
          className="border outline-0 p-2 rounded-xl w-[400px] md:w-[600px]"
          type="text"
          placeholder="maxsulot qidirish"
        />
      </div>

      {/* Menu button (mobile) */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-6 md:gap-12">
        <NavLink to={"/favorites"} className="flex items-center gap-2 text-lg">
          Sevimlilar <FaHeart />
        </NavLink>
        <NavLink to={"/shop"} className="flex items-center gap-2 text-lg">
          Savat <FaShoppingCart />
        </NavLink>
        {role === "admin" && (
          <NavLink
            to={"/admin"}
            className="flex items-center gap-2 border px-4 py-2 rounded-2xl text-lg"
          >
            Admin <FaUserTie />
          </NavLink>
        )}
      </div>

      {/* Auth button / Profile (desktop) */}
      <div className="hidden md:block">
        {data?.role ? (
          <Profile userData={data} />
        ) : (
          <Register>
            <button className="flex items-center gap-2 border py-2 px-6 rounded-2xl cursor-pointer active:scale-90 text-lg">
              Kirish <FaRegUserCircle />
            </button>
          </Register>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-400 flex flex-col items-center py-4 md:hidden gap-4">
          <NavLink
            to={"/favorites"}
            className="flex items-center gap-2 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Sevimlilar <FaHeart />
          </NavLink>
          <NavLink
            to={"/shop"}
            className="flex items-center gap-2 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Savat <FaShoppingCart />
          </NavLink>
          {role === "admin" && (
            <NavLink
              to={"/admin"}
              className="flex items-center gap-2 border px-4 py-2 rounded-2xl text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Admin <FaUserTie />
            </NavLink>
          )}
          {data?.role ? (
            <Profile userData={data} />
          ) : (
            <Register>
              <button className="flex items-center gap-2 border py-2 px-6 rounded-2xl cursor-pointer active:scale-90 text-lg">
                Kirish <FaRegUserCircle />
              </button>
            </Register>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
