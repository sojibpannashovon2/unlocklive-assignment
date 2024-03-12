import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../componet/Shared/Navber";
import Footer from "../componet/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
