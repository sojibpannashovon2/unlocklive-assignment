import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../componet/Shared/Navber";

const MainLayout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
    </div>
  );
};

export default MainLayout;
