import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../components/SignUp";  // Import UI Component

const SignUpRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default SignUpRoutes;