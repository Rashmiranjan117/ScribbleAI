import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Images from "../pages/Images";
import Text from "../pages/Text";
import Home from "../pages/Home";

const Allroutes = () => {
  return (
    <Routes>
      <Route element={<Login />} path="/login" />
      <Route element={<Signup />} path="/signup" />
      <Route element={<Images />} path="/images" />
      <Route element={<Text />} path="/text" />
      <Route element={<Home />} path="/" />

      <Route element={<h1>Error 404 | Page Not Found</h1>} />
    </Routes>
  );
};

export default Allroutes;
