import React from "react";
import Head from 'next/head';

const MyLastFilm = () => {
  return (
    <div className="flex goudy flex-col items-center justify-center h-[100vh] p-4 bg-gray-100">
      <Head>
        <title>Last Film</title>
      </Head>
      <div className="relative w-[90%] md:w-[80%] h-[60vw] md:h-[45vw]">
        <iframe
          src="https://player.vimeo.com/video/957867786?h=2c6ea2af5f"
          className='w-full h-full'
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default MyLastFilm;