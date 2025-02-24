import React, { useState, useRef } from "react";
import Head from 'next/head';
import { useIsMobile } from "@/hooks/useIsMobile";

const LatestFilm = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const isMobile = useIsMobile();

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex goudy justify-center items-start h-[90vh] bg-black">
      <Head>
        <title>Latest Film</title>
      </Head>
      <div className={`relative w-[90%] md:w-[50%] ${isMobile && 'landscape:h-[calc(100vh-110px)]' } h-[60vw] md:h-[25vw] z-[40] mt-9`}>
        <video
          ref={videoRef}
          src="https://graduationday.s3.us-east-2.amazonaws.com/GraduationDay.mp4"
          className="w-full h-full"
          controls
          playsInline
          autoPlay
          preload="auto"
          loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
    </div>
  );
};

export default LatestFilm;