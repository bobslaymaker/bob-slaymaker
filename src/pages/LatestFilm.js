import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useIsMobile } from "@/hooks/useIsMobile";
import dynamic from "next/dynamic";
import MuxPlayer from "@mux/mux-player-react";

// Import ReactPlayer dynamically with no SSR
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const LatestFilm = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();

  // Only render client-side components after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Add global styles when component mounts
  useEffect(() => {
    if (isMounted) {
      // Apply global styles directly to document
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.body.style.width = "100%";
      document.body.style.margin = "0";
      document.body.style.padding = "0";
      document.body.style.backgroundColor = "black";

      // Also apply to html for completeness
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100%";
      document.documentElement.style.width = "100%";
      document.documentElement.style.margin = "0";
      document.documentElement.style.padding = "0";

      // Cleanup function to restore styles when component unmounts
      return () => {
        document.body.style.overflow = "";
        document.body.style.height = "";
        document.body.style.width = "";
        document.body.style.margin = "";
        document.body.style.padding = "";
        document.body.style.backgroundColor = "";

        document.documentElement.style.overflow = "";
        document.documentElement.style.height = "";
        document.documentElement.style.width = "";
        document.documentElement.style.margin = "";
        document.documentElement.style.padding = "";
      };
    }
  }, [isMounted]);

  return (
    <div
      className={`flex flex-col goudy items-center`}
    >
      <Head>
        <title>Latest Film</title>
      </Head>

      {isMounted && (
        <div className={`w-full max-w-4xl`}>
          {/* This wrapper maintains the aspect ratio */}
          <div
            className={`px-5 mt-6 flex justify-center ${
              isMobile
                ? "landscape:h-[calc(100vh-24px)]"
                : ""
            }`}
          >
            <div className={`relative ${
              isMobile
                ? "landscape:h-[calc(100vh-130px)] landscape:max-w-full"
                : "w-full max-h-[80vh] aspect-video"
            }`}>
              <MuxPlayer
                streamType="on-demand"
                metadata={{
                  video_title: "Graduation Day",
                  viewer_user_id: "user-id",
                }}
                playbackId={"qN9L1266WOldKYVFYh9DlbqCkiaRyEPDIfaveERMFBA"}
                accentColor="red"
                autoPlay
                native
                playsInline
                style={{ 
                  height: '100%', 
                  width: '100%', 
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestFilm;