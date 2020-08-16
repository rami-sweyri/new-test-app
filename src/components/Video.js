import React, { useContext } from "react";

import video0 from "../assets/bg-video-0.png";

import video1 from "../assets/video/img.png";
import video2 from "../assets/video/img@2x.png";
import video3 from "../assets/video/img@3x.png";

import bg from "../assets/bg-video.png";
import videoPlay from "../assets/video-play.svg";
import voice from "../assets/voice.svg";
import bigFull from "../assets/big-full.svg";
import AppContext from "../context/AppContext";
import fileVideo from "../assets/file-video.svg";
import audio from "../assets/audio.svg";
import downVideo from "../assets/down-video.svg";
import bgDownPrice from "../assets/bg-down-price.svg";
import shop from "../assets/shop.svg";

const Video = () => {
  const { videoInfo } = useContext(AppContext);
  return (
    <div className="w-full">
      {videoInfo.type === "video" && (
        <img className="absolute left-0 right-0 top-0 bottom-0" src={bg} />
      )}
      <div className="absolute flex flex-col justify-start items-end video-title-cover">
        {videoInfo.type === "pdf" && (
          <div className="flex items-center">
            <p className="font-semibold file-title">PDF</p>
            <img className="file-icon" src={fileVideo} />
          </div>
        )}
        {videoInfo.type === "word" && (
          <div className="flex items-center">
            <p className="font-semibold file-title">WORD</p>
            <img className="file-icon" src={fileVideo} />
          </div>
        )}
        {videoInfo.type === "audio" && (
          <div className="flex items-center">
            <p className="font-semibold file-title">AUDIO</p>
            <img src={audio} />
          </div>
        )}
        <p
          className="text-right text-white font-medium video-title"
          style={{
            maxWidth: 400,
            marginTop: 21.6,
            marginBottom: 10,
          }}
        >
          {videoInfo.title}
        </p>
      </div>
      {videoInfo.type !== "video" && (
        <>
          <div className="absolute flex justify-between items-center video-price-pos">
            <p
              className="font-medium video-price-text"
              style={{
                marginRight: 5,
              }}
            >
              دينار كويتي
            </p>
            <p className="font-semibold video-price-value">{videoInfo.price}</p>
          </div>
          <div
            className="absolute flex justify-between items-center"
            style={{
              left: 37.1,
              bottom: 26.7,
            }}
          >
            <div className="flex justify-between items-center">
              <img
                className="video-down-btn"
                src={downVideo}
                style={{ marginRight: 5 }}
              />
              <p className="font-normal video-down-text text-right">
                {videoInfo.download}
              </p>
            </div>
          </div>

          <div
            className="absolute flex justify-between items-center"
            style={{
              left: 50.1,
              top: 46.2,
            }}
          >
            <div className="flex justify-between items-center">
              <div className="relative">
                <img className="video-shop-btn" src={bgDownPrice} />
                <img className="absolute video-shop-btn-value" src={shop} />
              </div>

              <p className="font-semibold video-shop text-right text-white ml-2">
                تحميل / شراء
              </p>
            </div>
          </div>
        </>
      )}
      {videoInfo.type === "video" ? (
        <>
          <div className="flex justify-between items-center absolute video-progress-bar">
            <img className="play-btn" src={videoPlay} />
            <div className="border-t border-white w-8/12"></div>
            <p className="font-medium text-white video-time">0:00 / 2:29</p>

            <img className="video-volume" src={voice} />
            <img className="full-screen-button" src={bigFull} />
          </div>
          <img
            className="w-full h-full object-cover object-center"
            src={video1}
            srcSet={video1 + " 1x," + video2 + " 2x," + video3 + " 3x"}
          />
        </>
      ) : (
        <div className="bg-0">
          <img
            className="w-full h-full object-cover object-center"
            src={video0}
          />
        </div>
      )}
    </div>
  );
};

export default Video;
