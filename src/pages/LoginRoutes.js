import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";  // Import UI Component

const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default LoginRoutes;
