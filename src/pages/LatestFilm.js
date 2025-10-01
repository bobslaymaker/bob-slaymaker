import React from "react";
import Head from "next/head";

const LatestFilm = () => {
  // Function to handle back button click
  const handleBackClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col goudy items-center p-5 ">
      <Head>
        <title>Latest Film</title>
      </Head>

      {/* Back button */}
      <button 
        onClick={handleBackClick}
        className="fixed top-4 left-4 z-10 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-lg transition-all duration-200"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
      </button>

      {/* Vimeo embed */}
      <div className="w-full max-w-[100vh]">
        <div style={{padding:"56.25% 0 0 0",position:"relative"}}>
          <iframe 
            src="https://player.vimeo.com/video/1120453260?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}} 
            title="Graduation Day, A Film by Bob Slaymaker"
          />
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>
  );
};

export default LatestFilm;