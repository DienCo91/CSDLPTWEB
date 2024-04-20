import React, { useEffect } from "react";
import Nav from "../components/Nav/Nav";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";

const BaseLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/" || pathname === "") {
      navigate("/home");
    }
  }, [pathname]);
  return (
    <div>
      <Nav />
      <div className="flex">
        <div className="flex-[15]">
          <Outlet />
        </div>
        <div className="flex-[3] px-[20px]">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;