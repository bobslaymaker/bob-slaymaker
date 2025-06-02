import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useIsMobile } from "@/hooks/useIsMobile";
import dynamic from "next/dynamic";
import MuxPlayer from "@mux/mux-player-react";

// Import ReactPlayer dynamically with no SSR
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const LatestFilm = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Start with autoPlay true
  const [isMounted, setIsMounted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const isMobile = useIsMobile();
  const playerRef = useRef(null);
  const containerRef = useRef(null);

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

  // Track fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );
      
      setIsFullscreen(isCurrentlyFullscreen);
      
      // Remove focus from any active element when entering/exiting fullscreen
      if (document.activeElement && document.activeElement.blur) {
        document.activeElement.blur();
      }
      
      // Focus the container to capture keyboard events
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.focus();
        }
      }, 100);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
    };
  }, []);

  // Handle keyboard events for spacebar play/pause
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Only handle spacebar if it's not focused on a button or other interactive element
      const activeElement = document.activeElement;
      const isInteractiveElement = activeElement && (
        activeElement.tagName === 'BUTTON' ||
        activeElement.tagName === 'INPUT' ||
        activeElement.tagName === 'TEXTAREA' ||
        activeElement.tagName === 'SELECT' ||
        activeElement.getAttribute('role') === 'button' ||
        activeElement.getAttribute('tabindex') === '0'
      );

      if (event.code === "Space" && !isInteractiveElement) {
        event.preventDefault(); // Prevent page scrolling and default behavior
        event.stopPropagation(); // Stop event bubbling
        
        // Add a small delay to prevent conflicts with native player controls
        setTimeout(() => {
          togglePlayPause();
        }, 10);
      }
    };

    // Add event listener to the container instead of window for better control
    const container = containerRef.current;
    if (container) {
      container.addEventListener("keydown", handleKeyDown, true); // Use capture phase
    }
    
    // Also add to window as fallback
    window.addEventListener("keydown", handleKeyDown, true);
    
    return () => {
      if (container) {
        container.removeEventListener("keydown", handleKeyDown, true);
      }
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [isPlaying, isFullscreen]);

  const togglePlayPause = () => {
    if (playerRef.current) {
      try {
        if (isPlaying) {
          playerRef.current.pause();
        } else {
          playerRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.warn("Error toggling play/pause:", error);
      }
    }
  };

  // Handle touch/click on video to toggle play/pause
  const handleVideoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    togglePlayPause();
  };

  return (
    <div className="flex flex-col goudy items-center">
      <Head>
        <title>Latest Film</title>
      </Head>

      {isMounted && (
        <div className="w-full max-w-4xl">
          {/* This wrapper maintains the aspect ratio */}
          <div
            className={`px-5 mt-6 flex justify-center ${
              isMobile ? "landscape:h-[calc(100vh-24px)]" : ""
            }`}
          >
            <div
              ref={containerRef}
              tabIndex={-1} // Make container focusable but not in tab order
              className={`relative outline-none ${
                isMobile
                  ? "landscape:h-[calc(100vh-130px)] landscape:max-w-full"
                  : "w-full max-h-[80vh] aspect-video"
              }`}
              style={{ 
                outline: 'none', // Remove focus outline
                border: 'none'
              }}
            >
              {/* Overlay div to capture clicks/touches */}
              <div 
                className="absolute inset-0 z-10 cursor-pointer"
                onClick={handleVideoClick}
                style={{ touchAction: "manipulation" }}
              />
              
              <MuxPlayer
                ref={playerRef}
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
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                // Disable native keyboard controls to prevent conflicts
                onKeyDown={(e) => {
                  if (e.code === "Space") {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
                style={{
                  height: "100%",
                  width: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
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