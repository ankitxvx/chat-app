import React from "react";

const Background = () => {
  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted={true}
        className="background-icon w-full h-full object-cover absolute top-0 left-0"
        alt="BackgroundImage"
        src=".\images\back-video.mp4"
      />
    </div>
  );
};

export default Background;
