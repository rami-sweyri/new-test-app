import React, { useContext } from "react";
import AppContext from "../context/AppContext";

import down from "../assets/down.svg";

import bgSmallX3 from "../assets/bgSmall/img@3x.png";
import bgSmallX2 from "../assets/bgSmall/img@2x.png";
import bgSmallX1 from "../assets/bgSmall/img.png";

import cam from "../assets/cam.svg";
import file from "../assets/file.svg";
import audio from "../assets/audio.svg";

import bg0 from "../assets/bg-0.png";

const Course = ({ data }) => {
  const { onVideoChange } = useContext(AppContext);

  return (
    <div className="md:w-4/12 w-6/12 flex justify-center items-start flex-col course">
      <div
        className="relative w-full cursor-pointer"
        onClick={(e) => onVideoChange({ data })}
      >
        {data.type === "video" && (
          <img
            className="absolute left-0 right-0 top-0 bottom-0 w-full"
            src={bgSmallX1}
            srcSet={bgSmallX1 + " 1x," + bgSmallX2 + " 2x," + bgSmallX3 + " 3x"}
          />
        )}
        <div
          className="absolute right-0 bottom-0"
          style={{ paddingBottom: 16.3, paddingRight: 20.4 }}
        >
          {data.type === "video" && (
            <img className="course-video-icon" src={cam} />
          )}
          {data.type === "pdf" && (
            <div className="flex items-center">
              <p className="font-semibold file-text">PDF</p>
              <img className="file" src={file} />
            </div>
          )}
          {data.type === "word" && (
            <div className="flex items-center">
              <p className="font-semibold file-text">WORD</p>
              <img className="file" src={file} />
            </div>
          )}

          {data.type === "audio" && (
            <div className="flex items-center">
              <p className="font-semibold file-text">AUDIO</p>
              <img src={audio} />
            </div>
          )}
        </div>
        {data.type === "video" ? (
          <img
            className="w-full object-center object-cover"
            src={data.img[0]}
            srcSet={
              data.img[0] + " 1x," + data.img[1] + " 2x," + data.img[3] + " 3x"
            }
          />
        ) : (
          <div className="bg-0">
            <img className="w-full object-center object-cover" src={bg0} />
          </div>
        )}
      </div>
      <div className="flex justify-end w-full px-2">
        <p className="font-semibold text-right text-white w-full course-title">
          {data.title}
        </p>
      </div>
      <div
        className="flex justify-between items-center w-full px-2"
        style={{ marginTop: 11 }}
      >
        <div className="flex justify-between items-center">
          <img src={down} style={{ marginRight: 4 }} />
          <p className="font-normal" style={{ fontSize: 12, color: "#8191b2" }}>
            {data.download}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p
            className="font-medium course-price-text"
            style={{
              fontSize: 13,
              color: "#8191b2",
              marginRight: 4,
              lineHeight: 1.54,
            }}
          >
            دينار كويتي
          </p>
          <p className="font-semibold course-price">{data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Course;
