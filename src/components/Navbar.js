import React, { useContext } from "react";
import bill from "../assets/bill.svg";
import user from "../assets/user.svg";
import arrowRight from "../assets/arrow-right.svg";
import arrowLeft from "../assets/arrow-left.svg";
import menu from "../assets/menu.svg";
import AppContext from "../context/AppContext";

const Navbar = () => {
  const { onToggleSideBar, sideBar, onToggleSideMenu } = useContext(AppContext);

  return (
    <nav className="w-full flex justify-between  items-center bg-white">
      <div
        className="flex md:hidden cursor-pointer"
        // onClick={() => onToggleSideMenu()}
      >
        <img src={menu} />
      </div>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => onToggleSideBar()}
      >
        {!sideBar && (
          <>
            <p className="text-right text-cobalt font-bold">قائمة الإنتظار</p>
            <p className="text-right text-cobalt font-semibold ml-2">١٤</p>
          </>
        )}
        <img
          className="text-cobalt mx-5 hidden md:flex"
          src={sideBar ? arrowLeft : arrowRight}
          style={{ width: 17, height: 17 }}
        />
        <img
          className="text-cobalt mx-5 flex md:hidden"
          src={sideBar ? arrowRight : arrowLeft}
          style={{ width: 17, height: 17 }}
        />
      </div>
      <div className="justify-between items-center hidden md:flex">
        <p style={{ marginRight: 12 }}>
          <span
            className="text-blue-t-300 text-right font-semibold"
            style={{ fontSize: 16, lineHeight: "29px" }}
          >
            مرحبآ بك
          </span>{" "}
          <span
            className="text-blue-t-300 text-right font-bold"
            style={{ fontSize: 19, fontWeight: "bold", lineHeight: "29px" }}
          >
            مالك محمد
          </span>
        </p>

        <div className="flex">
          <div
            className="text-blue-t-300 nav-circle relative"
            style={{ marginRight: 51 }}
          >
            <img
              className="text-blue-t-300 nav-user absolute"
              style={{ top: "19%", left: "19%" }}
              src={user}
            />
          </div>
        </div>
        <img className="nav-bill text-blue-t-300" src={bill} />
      </div>
    </nav>
  );
};

export default Navbar;
