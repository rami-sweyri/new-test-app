import React, { useContext } from "react";
import AppContext from "../context/AppContext";

import smallLogo1 from "../assets/smallLogo/img.png";
import smallLogo2 from "../assets/smallLogo/img@2x.png";
import smallLogo3 from "../assets/smallLogo/img@3x.png";

import bigLogo1 from "../assets/bigLogo/img.png";
import bigLogo2 from "../assets/bigLogo/img@2x.png";
import bigLogo3 from "../assets/bigLogo/img@3x.png";

import user1 from "../assets/profile/user-1.png";
import user2 from "../assets/profile/user-1@2x.png";
import user3 from "../assets/profile/user-1@3x.png";

import home from "../assets/home.svg";
import starFill from "../assets/starFill.svg";
import star from "../assets/star.svg";
import billWhite from "../assets/billWhite.svg";
import user from "../assets/user.svg";

const Header = () => {
  const { sideBar } = useContext(AppContext);

  return (
    <header
      className={`bg-blue-t-100 flex justify-between items-center ${
        sideBar ? "rounded-tl-xl" : ""
      } `}
    >
      <img
        className="flex md:hidden"
        src={smallLogo1}
        srcSet={smallLogo1 + " 1x," + smallLogo2 + " 2x," + smallLogo3 + " 3x"}
      />
      <img
        className="hidden md:flex"
        src={bigLogo1}
        srcSet={bigLogo1 + " 1x," + bigLogo2 + " 2x," + bigLogo3 + " 3x"}
      />
      <div className="justify-between items-start md:flex hidden">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-end flex-col">
            <p
              className="font-bold text-right text-white"
              style={{ fontSize: 18, marginBottom: 12 }}
            >
              العيادة الرقمية
            </p>
            <div
              className="flex justify-between items-center"
              style={{ marginBottom: 12 }}
            >
              <div
                className="status-btn flex justify-center items-center"
                style={{ marginRight: 18 }}
              >
                <p className="text-white font-bold" style={{ fontSize: 13 }}>
                  مشغول بإستشارة
                </p>
              </div>
              <p
                className="font-semibold text-right "
                style={{
                  fontSize: 20,
                  color: "#a7b5d2",
                }}
              >
                لـ د. هند الناهض
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p
                className="font-normal text-right "
                style={{
                  fontSize: 13,
                  color: "#a7b5d2",
                  marginRight: 8,
                  lineHeight: "12px",
                }}
              >
                تقييم
              </p>
              <img className="mr-1" src={star} />
              <img className="mr-1" src={starFill} />
              <img className="mr-1" src={starFill} />
              <img src={starFill} />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <img
            className="icon-profile"
            style={{ marginRight: 20, marginLeft: 14 }}
            src={user3}
            srcSet={user1 + " 1x," + user2 + " 2x," + user3 + " 3x"}
          />
          <img className="icon-home" src={home} />
        </div>
      </div>

      <div className="justify-between items-center flex md:hidden">
        <div className="flex">
          <div
            className="text-blue-t-300 nav-circle relative"
            style={{ marginRight: 14.4 }}
          >
            <img
              className="text-blue-t-300 nav-user absolute"
              style={{ top: "19%", left: "19%" }}
              src={user}
            />
          </div>
        </div>
        <div className="relative">
          <img className="nav-bill" src={billWhite} />

          <div
            className="dot-bill rounded-full absolute"
            style={{ top: -2, right: -5 }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
