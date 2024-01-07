import React, { useEffect, useRef } from "react";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const getMediaStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing the camera:", error);
      }
    };

    getMediaStream();
  }, []);

  return <video className="w-full h-full object-cover" ref={videoRef} autoPlay playsInline />;
};

export default Video;
