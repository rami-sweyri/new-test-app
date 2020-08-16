import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

import wifi from "../assets/wifi.svg";
import video from "../assets/video.svg";
import mic from "../assets/mic.svg";

import user1 from "../assets/profile/user-1.png";
import user2 from "../assets/profile/user-1@2x.png";
import user3 from "../assets/profile/user-1@3x.png";
import home from "../assets/home.svg";
import starFill from "../assets/starFill.svg";
import star from "../assets/star.svg";
import arrowRightWhite from "../assets/arrow-right-white.svg";
const Menu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [courseID, setCoursesID] = useState(0);
  useEffect(() => {
    if (
      currentPath.includes("courses") &&
      typeof currentPath.split("courses/")[1] !== "undefined"
    ) {
      setCoursesID(currentPath.split("courses/")[1]);
    } else {
      setCoursesID(0);
    }
  }, [currentPath]);
  console.log(courseID);
  return (
    <>
      <div className="menu flex justify-center md:justify-between items-center">
        <div className="flex justify-start items-center">
          <div
            className="flex justify-start items-center"
            style={{ marginRight: 49 }}
          >
            <div
              className="flex flex-col items-end icon-info"
              style={{ marginRight: 17 }}
            >
              <p className="text-white text-right font-semibold icon-title">
                سرعة الأنترنت
              </p>
              <p
                className="font-medium text-right"
                style={{ fontSize: 14, color: "#a7b5d2 " }}
              >
                ٣٦ Mbps
              </p>
            </div>
            <div className="menu-icons wifi rounded-full flex justify-center items-center">
              <img className="wifi-icon" src={wifi} />
            </div>
          </div>
          <div
            className="flex justify-start items-center"
            style={{ marginRight: 49 }}
          >
            <div
              className="flex-col items-end md:flex hidden"
              style={{ marginRight: 17 }}
            >
              <p
                className="text-white text-right font-semibold"
                style={{ fontSize: 16, marginBottom: 7 }}
              >
                تجربة الكاميرا
              </p>
              <p
                className="font-medium text-right"
                style={{ fontSize: 14, color: "#a7b5d2 " }}
              >
                لم تقم باختبارها
              </p>
            </div>
            <div className="menu-icons video rounded-full flex justify-center items-center">
              <img className="video-icon" src={video} />
            </div>
          </div>
          <div
            className="flex justify-start items-center"
            // style={{ marginRight: 49 }}
          >
            <div
              className="flex-col items-end md:flex hidden"
              style={{ marginRight: 17 }}
            >
              <p
                className="text-white text-right font-semibold"
                style={{ fontSize: 16, marginBottom: 7 }}
              >
                تجربة الصوت
              </p>
              <p
                className="font-medium text-right"
                style={{ fontSize: 14, color: "#a7b5d2 " }}
              >
                جيد جدآ
              </p>
            </div>
            <div className="menu-icons mic rounded-full flex justify-center items-center">
              <img className="mic-icon" src={mic} />
            </div>
          </div>
        </div>
        <div className="justify-start items-center flex-row-reverse hidden md:flex">
          <NavLink
            to="/about"
            className="font-medium link relative my-2 text-right"
            style={{ fontSize: 18, marginLeft: 40 }}
          >
            نبذه عن هند
          </NavLink>
          <NavLink
            to="/store"
            className="font-medium link relative my-2 text-right"
            style={{ fontSize: 18, marginLeft: 40 }}
          >
            متجر
          </NavLink>
          <NavLink
            to="/broadcast"
            className="font-medium link relative my-2 text-right"
            style={{ fontSize: 18, marginLeft: 40 }}
          >
            برودكاست
          </NavLink>

          <NavLink
            to="/courses"
            className="font-medium link relative my-2 text-right flex justify-start items-center h-full"
            style={{ fontSize: 18, marginLeft: 40 }}
          >
            <span> كورسات</span>
            {courseID !== 0 && (
              <img
                style={{ marginLeft: 8, marginTop: 5 }}
                className="h-full"
                src={arrowRightWhite}
              />
            )}
          </NavLink>
          <NavLink
            to="/reservation"
            className="font-medium link relative my-2 text-right"
            style={{ fontSize: 18, marginLeft: 40 }}
          >
            حجز عيادة (20 دينار كويتي)
          </NavLink>
        </div>
      </div>
      <div className="flex-col md:hidden flex user-mob">
        <div className="justify-end items-start md:hidden flex user-mob-padding">
          <div className="flex justify-end items-center w-full">
            <div className="flex justify-between items-end flex-col w-full">
              <p
                className="font-bold text-right text-white"
                style={{ fontSize: 11, marginBottom: 9 }}
              >
                العيادة الرقمية
              </p>
              <div
                className="flex justify-between items-center w-full"
                style={{ marginBottom: 10 }}
              >
                <div
                  className="status-btn flex justify-center items-center"
                  style={{
                    width: 95,
                    height: 23,
                  }}
                >
                  <p className="text-white font-bold" style={{ fontSize: 9 }}>
                    مشغول بإستشارة
                  </p>
                </div>
                <p
                  className="font-semibold text-right "
                  style={{
                    fontSize: 15,
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
                    fontSize: 11,
                    color: "#a7b5d2",
                    marginRight: 8,
                    lineHeight: "12px",
                  }}
                >
                  تقييم
                </p>
                <img
                  className="mr-1"
                  styly={{ width: 10.8, height: 10.4 }}
                  src={star}
                />
                <img
                  className="mr-1"
                  styly={{ width: 10.8, height: 10.4 }}
                  src={starFill}
                />
                <img
                  className="mr-1"
                  styly={{ width: 10.8, height: 10.4 }}
                  src={starFill}
                />
                <img styly={{ width: 10.8, height: 10.4 }} src={starFill} />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <img
              className="icon-profile-mob"
              style={{ marginLeft: 12 }}
              src={user3}
              srcSet={user1 + " 1x," + user2 + " 2x," + user3 + " 3x"}
            />
          </div>
        </div>
        <div className="relative flex items-center">
          <div
            className="justify-start w-full h-full items-center flex-row-reverse md:hidden flex overflow-y-auto menu-scroll user-menu-mob"
            style={{ marginTop: 21.3, marginBottom: 10 }}
          >
            <NavLink
              to="/about"
              className="font-medium link relative text-right whitespace-no-wrap"
              style={{ fontSize: 12, marginLeft: 26, marginRight: 26 }}
            >
              نبذه عن هند
            </NavLink>
            <NavLink
              to="/store"
              className="font-medium link relative text-right whitespace-no-wrap"
              style={{ fontSize: 12, marginLeft: 26 }}
            >
              متجر
            </NavLink>
            <NavLink
              to="/broadcast"
              className="font-medium link relative text-right whitespace-no-wrap"
              style={{ fontSize: 12, marginLeft: 26 }}
            >
              برودكاست
            </NavLink>

            <NavLink
              to="/courses"
              className="font-medium link relative text-right flex justify-start items-center h-full whitespace-no-wrap"
              style={{ fontSize: 12, marginLeft: 26 }}
            >
              <span> كورسات</span>
              {courseID !== 0 && (
                <img
                  style={{ marginLeft: 8, marginTop: 5 }}
                  className="h-full courses-btn"
                  src={arrowRightWhite}
                />
              )}
            </NavLink>
            <NavLink
              to="/reservation"
              className="font-medium link relative text-right whitespace-no-wrap"
              style={{ fontSize: 12, marginLeft: 26 }}
            >
              حجز عيادة (20 دينار كويتي)
            </NavLink>
          </div>
          <div className="opacity-link absolute top-0 left-0"></div>
        </div>
      </div>
    </>
  );
};

export default Menu;
