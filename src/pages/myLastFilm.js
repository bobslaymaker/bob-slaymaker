import React from "react";
import Head from 'next/head';

const MyLastFilm = () => {
  return (
    <div className="flex goudy flex-col items-center justify-center h-[100vh] p-4 bg-black">
      <Head>
        <title>Last Film</title>
      </Head>
      <div className="relative w-[90%] md:w-[80%] h-[60vw] md:h-[45vw]">
        <iframe
          src="https://drive.google.com/file/d/1l7oWpp_HxLOXfmrzxesJE6Xlc-W3t3M-/preview?rm=1"
          className='w-full h-full'
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MyLastFilm;
