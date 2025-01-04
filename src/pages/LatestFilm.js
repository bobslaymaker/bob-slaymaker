import React from "react";
import Head from 'next/head';

const MyLastFilm = () => {
  return (
    <div className="flex goudy flex-col items-center h-[90vh] p-4 bg-black">
      <Head>
        <title>Last Film</title>
      </Head>
      <h6 className="goudy text-[32px] uppercase text-center mt-6 text-white"><b />My Last Film<b /></h6>
      <div className="relative w-[90%] md:w-[50%] h-[60vw] md:h-[25vw] z-[40] mt-3">
        <video
          src="/Video/GraduationDay.mp4"
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

export default MyLastFilm;