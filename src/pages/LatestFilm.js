import React from "react";
import Head from 'next/head';

const LatestFilm = () => {
  return (
    <div className="flex goudy flex-col items-center h-[90vh] bg-black">
      <Head>
        <title>Latest Film</title>
      </Head>
            <div className="relative w-[90%] md:w-[50%] h-[60vw] md:h-[25vw] z-[40] mt-9">
        <video
          src="https://graduationday.s3.us-east-2.amazonaws.com/GraduationDay.mp4"
          className="w-full h-full"
          controls
          playsInline
          autoPlay
          muted
        />
      </div>
    </div>
  );
};

export default LatestFilm;