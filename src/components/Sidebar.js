import React from "react";
import userIcon from "../assets/user-icon.svg";
import userIconActive from "../assets/user-icon-active.svg";
import insta from "../assets/insta.svg";
import twi from "../assets/twi.svg";
import fac from "../assets/fac.svg";

import data from "../data/userWait";

const UserWait = ({ user }) => {
  return (
    <div
      className="flex justify-start items-center"
      style={{ marginBottom: 34 }}
    >
      <div
        className="flex flex-col justify-start items-end"
        style={{ marginRight: 11 }}
      >
        <p
          className="text-right font-normal sidebar-time"
          style={{ color: "#8c9cbe" }}
        >
          {user.time}
        </p>
        <p
          className="text-right font-semibold sidebar-name "
          style={{ color: "#1c3668" }}
        >
          {user.userName}
        </p>
      </div>
      <div className="user-wait flex justify-center items-center">
        {user.active ? <img src={userIconActive} /> : <img src={userIcon} />}
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="flex justify-start items-center flex-col">
      <div className="flex justify-between items-center wait relative">
        <p className="text-right text-cobalt font-bold text-wait">
          قائمة الإنتظار
        </p>
        <p className="text-right text-cobalt font-semibold ml-2 text-wait">
          ١٤
        </p>
      </div>
      <div
        className="flex flex-col items-end justify-start w-64"
        style={{ marginTop: 46.5, marginRight: 71 }}
      >
        {data.map((user) => (
          <UserWait user={user} key={user.id} />
        ))}
      </div>
      <div
        className="flex items-end justify-start flex-col"
        style={{ marginTop: 50 }}
      >
        <p
          className="text-right font-normal"
          style={{ fontSize: 16, color: "#889dc7", lineHeight: 1.81 }}
        >
          جميع الحقوق محفوظة
        </p>
        <p
          className="text-right font-normal"
          style={{ fontSize: 16, color: "#889dc7", lineHeight: 1.81 }}
        >
          تايم فيوير © ٢٠١٣ - ٢٠٢٠
        </p>
        <div
          className="flex justify-start items-center"
          style={{ marginTop: 24 }}
        >
          <img src={insta} style={{ marginLeft: 12.8 }} />
          <img src={twi} style={{ marginLeft: 12.7 }} />
          <img src={fac} style={{ marginLeft: 12.7 }} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
