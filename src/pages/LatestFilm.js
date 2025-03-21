import React, { useState, useEffect, useRef } from "react";
import Head from 'next/head';
import { useIsMobile } from "@/hooks/useIsMobile";
import dynamic from 'next/dynamic';
import "plyr-react/plyr.css";

// Dynamically import Plyr with no SSR
const Plyr = dynamic(() => import("plyr-react"), {
  ssr: false,
});

const LatestFilm = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [isLandscape, setIsLandscape] = useState(false);
  const isMobile = useIsMobile();
  const videoUrl = "https://graduationday.s3.us-east-2.amazonaws.com/GraduationDay.mp4";
  const playerRef = useRef(null);
  const resizeTimerRef = useRef(null);

  // Split into two separate useEffect hooks
  useEffect(() => {
    setIsMounted(true);
    
    if (typeof window !== 'undefined') {
      // Set initial viewport height and orientation
      setViewportHeight(window.innerHeight);
      setIsLandscape(window.innerWidth > window.innerHeight);

      const handleResize = () => {
        if (resizeTimerRef.current) {
          clearTimeout(resizeTimerRef.current);
        }
        
        resizeTimerRef.current = setTimeout(() => {
          setViewportHeight(window.innerHeight);
          setIsLandscape(window.innerWidth > window.innerHeight);
        }, 300);
      };

      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        if (resizeTimerRef.current) {
          clearTimeout(resizeTimerRef.current);
        }
      };
    }
  }, []);

  // Separate useEffect for document manipulation
  useEffect(() => {
    // Only run this effect on the client side after mounting
    if (typeof window !== 'undefined' && isMounted) {
      const applyStyles = () => {
        const elements = [document.body, document.documentElement];
        elements.forEach(element => {
          element.style.overflow = "hidden";
          element.style.height = "100%";
          element.style.width = "100%";
          element.style.margin = "0";
          element.style.padding = "0";
        });
        document.body.style.backgroundColor = "black";
      };

      applyStyles();

      return () => {
        const elements = [document.body, document.documentElement];
        elements.forEach(element => {
          element.style.overflow = "";
          element.style.height = "";
          element.style.width = "";
          element.style.margin = "";
          element.style.padding = "";
        });
        document.body.style.backgroundColor = "";
      };
    }
  }, [isMounted]);

  const plyrOptions = {
    controls: [
      'play-large', 'play', 'progress', 'current-time', 'mute',
      'volume', 'fullscreen'
    ],
    fullscreen: { enabled: true, fallback: true, iosNative: true },
    keyboard: true,
    touch: true,
    clickToPlay: true,
  };

  if (!isMounted) {
    return null;
  }

  // Use a more stable approach for video container sizing
  const getVideoContainerStyle = () => {
    const isSmallScreen = (isMobile && isLandscape) || viewportHeight < 600;
    
    if (isSmallScreen) {
      const maxHeight = viewportHeight * 0.75;
      const maxWidth = maxHeight * (16 / 9);
      
      return {
        width: `${maxWidth}px`,
        height: `${maxHeight}px`,
        maxWidth: '100%',
        position: 'relative', // Keep position consistent
      };
    }
    
    return {
      width: '100%',
      maxWidth: isMobile ? '100%' : '1024px',
      position: 'relative',
      paddingBottom: '56.25%', // 16:9 aspect ratio
    };
  };

  const videoContainerStyle = getVideoContainerStyle();

  // Use a key prop to force complete unmount/remount on layout changes
  // rather than partial DOM updates that can cause the error
  const containerKey = `video-container-${(isMobile && isLandscape) || viewportHeight < 600 ? 'small' : 'standard'}`;

  return (
    <div className="flex items-start justify-center w-full h-screen bg-black mt-5 px-5">
      <Head>
        <title>Latest Film</title>
      </Head>

      <div 
        key={containerKey}
        style={videoContainerStyle} 
        className={`${isMobile ? 'px-4' : ''}`}
      >
        <div className={`${((isMobile && isLandscape) || viewportHeight < 600) ? '' : 'absolute top-0 left-0 w-full h-full'}`}>
          {isMounted && (
            <Plyr
              ref={playerRef}
              source={{
                type: 'video',
                sources: [{
                  src: videoUrl,
                  type: 'video/mp4',
                }]
              }}
              options={plyrOptions}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default LatestFilm;