import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";

import AppContext from "./context/AppContext";
import ReservationBtn from "./components/ReservationBtn";

function App() {
  const [sideBar, setSideBar] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const [videoInfo, setVideoInfo] = useState({
    type: "video",
    title: "المقدمة التعريفية لـ هند الناهض",
    price: 299,
    download: 104,
  });

  const onToggleSideBar = () => {
    setSideBar(!sideBar);
    setSideMenu(false);
  };
  const onToggleSideMenu = () => {
    setSideMenu(!sideMenu);
    setSideBar(false);
  };
  const onVideoChange = ({ data }) =>
    setVideoInfo({
      ...videoInfo,
      type: data.type,
      title: data.title,
      price: data.price,
      download: data.download,
    });

  return (
    <AppContext.Provider
      value={{
        videoInfo,
        onVideoChange,
        sideBar,
        onToggleSideBar,
        sideMenu,
        onToggleSideMenu,
      }}
    >
      <Router basename={process.env.PUBLIC_URL}>
        <div className="flex justify-between items-start flex-row-reverse md:flex-row">
          {sideBar ? (
            <div className="md:w-2/12 w-6/12">
              <Sidebar />
            </div>
          ) : null}

          <div
            className={
              sideBar || sideMenu
                ? "md:w-10/12 home-shadow relative"
                : "w-full relative"
            }
          >
            <Navbar />
            <Header />
            <Menu />
            {!sideBar && <ReservationBtn />}
            <div className="main">
              <Route component={Routes} />
            </div>
          </div>
          {/* {sideMenu ? (
            <div className="md:w-2/12 w-6/12">
              <div className="flex justify-center items-center flex-col link-menu-p w-full">
                <p className="link-menu text-center">الرئيسية</p>
              </div>
            </div>
          ) : null} */}
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
