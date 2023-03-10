import { Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/SingIn";
import { SignUp } from "../pages/SingUp";
import { Home } from "../pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}
