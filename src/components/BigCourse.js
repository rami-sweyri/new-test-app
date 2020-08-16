import React, { useContext } from "react";

import bgBigX3 from "../assets/bgBig/img@3x.png";
import bgBigX2 from "../assets/bgBig/img@2x.png";
import bgBigX1 from "../assets/bgBig/img.png";
import cam from "../assets/video-camera.svg";
import { NavLink } from "react-router-dom";
import AppContext from "../context/AppContext";

const BigCourse = ({ data }) => {
  const { onVideoChange } = useContext(AppContext);

  return (
    <div className="md:w-3/12 w-full flex justify-center items-start flex-col courses-container">
      <NavLink
        to={`/courses/${data.id}`}
        className="relative w-full cursor-pointer"
        onClick={(e) => onVideoChange({ data })}
      >
        <img
          className="absolute left-0 right-0 top-0 bottom-0 w-full"
          src={bgBigX1}
          srcSet={bgBigX1 + " 1x," + bgBigX2 + " 2x," + bgBigX3 + " 3x"}
        />
        <div
          className="absolute right-0 bottom-0 flex justify-start items-center"
          style={{ paddingBottom: 16.3, paddingRight: 20.4 }}
        >
          <img src={cam} />
          <div
            className="text-right text-white font-normal flex"
            style={{ fontSize: 14, marginLeft: 14 }}
          >
            <p style={{ marginRight: 6 }}>فيديو </p> <p>{data.total}</p>
          </div>
        </div>
        <img
          className="w-full object-center object-cover"
          src={data.img[0]}
          srcSet={
            data.img[0] + " 1x," + data.img[1] + " 2x," + data.img[3] + " 3x"
          }
        />
      </NavLink>
      <p className="font-semibold text-right text-white w-full courses-title">
        {data.title}
      </p>

      <div className="flex justify-between items-center">
        <p className="font-medium courses-price-title">دينار كويتي</p>
        <p className="font-semibold courses-price">{data.price}</p>
      </div>
    </div>
  );
};

export default BigCourse;
