import { useEffect } from "react";
import Nav from "../components/Nav/Nav";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/Footer";

const BaseLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/" || pathname === "") {
      navigate("/home");
    }
  }, [pathname]);
  return (
    <div className="flex flex-col justify-between lg:h-screen">
      <Nav />
      <div className="flex flex-[8]">
        <div className="flex-[15]">
          <Outlet />
        </div>
        <div className="flex-[3] px-[20px]">
          <SideBar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
