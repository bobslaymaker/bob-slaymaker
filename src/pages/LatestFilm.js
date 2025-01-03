import React from "react";
import Head from 'next/head';

const MyLastFilm = () => {
  return (
    <div className="flex goudy flex-col items-center h-[90vh] p-4 bg-black">
      <Head>
        <title>Last Film</title>
      </Head>
   
      <div className="relative w-[90%] md:w-[50%] h-[60vw] md:h-[25vw] z-[40] mt-3">
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