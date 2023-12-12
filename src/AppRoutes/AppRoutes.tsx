import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

import React from "react";
import AllCategories from "../Pages/AllCategories/AllCategories";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import SingleProductPage from "../Pages/SingleProduct/SingleProductPage";
import CartPage from "../Pages/CartPage/CartPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/categories" element={<AllCategories />} />
      <Route path="/categories/:id" element={<CategoryPage />} />
      <Route path="/product/:id" element={<SingleProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default AppRoutes;
