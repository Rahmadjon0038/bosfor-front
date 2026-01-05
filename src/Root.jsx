import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
import Admin from "./pages/Admin";
import Favorites from "./pages/Favorites";
import Shop from "./pages/Shop";
import { useGetUsers } from "./hooks/user";
function Root() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/categories/:id" element={<Categories />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default Root;
