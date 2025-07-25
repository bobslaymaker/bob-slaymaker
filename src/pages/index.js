import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useIsMobile } from '../hooks/useIsMobile';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const isMobile = useIsMobile();

  const customStyles = {
    verticalSpacing: {
      //change only the number
      sm: "space-y-[5px]", //mobile (if you change the value here, also change the value of sm in linkSpacing)
      md: "md:space-y-[0px]", //ipad/tablets/14" laptop (***change md and lg value for l)
      lg: "lg:space-y-[0px]", //large screens
    },
    linkSpacing: {
      sm: "m-[5px]",
      md: "md:ms-[15px] md:me-[15px]",
      lg: "lg:ms-[15px] lg:me-[15px]",
    },
    horizontalLine: {
      //adjust horizontal line padding here ***remember to change the value of both pt and pb***
      sm: "pt-[0px] pb-[0px]",
      md: "md:pt-[15px] md:pb-[10px]",
      lg: "lg:pt-[20px] lg:pb-[20px]",
    },
  };

  return (
    <div
      className={`font-[800] text-center flex flex-col items-center justify-center lg:p-24 p-6 ${inter.className} space-x-5 mb-[0px] bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text transition-colors duration-200`}
      style={{
        width: "100vw",
        height: "100vh",
        maxHeight: "100vh",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <div
        className={`text-center goudy w-[95%] text-[22px] lg:text-[2.5vw]  ${customStyles.verticalSpacing.sm} ${customStyles.verticalSpacing.md} ${customStyles.verticalSpacing.lg}`}
      >
        <div className="space-y-[0px]">
          <h1 className=" text-[31px] md:text-[4.5vw] pb-[5px] md:pb-[0px] mt-10 md:mt-0">
            BOB SLAYMAKER
          </h1>
          <h1
            className=" text-[31px] md:text-[4.5vw] p-[0px]"
            style={{ fontVariant: "small-caps" }}
          >
            Writer–Filmmaker
          </h1>
        </div>

        <div
          className={`pt-[15px] pb-[15px] md:pt-[0px] md:pb-[0px] flex items-center justify-center ${customStyles.horizontalLine.sm} ${customStyles.horizontalLine.md} ${customStyles.horizontalLine.lg}`}
        >
          <hr
            className=" text-center dark:border-gray-700"
            style={{ border: "1px solid currentColor", width: "130px" }}
          ></hr>
        </div>

        <div
          className={`flex md:flex-row flex-col landscape:flex-row justify-between w-full`}
          style={{ position: "relative", inset: "0px" }}
        >

          <div
            className={` flex-1 text-center ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}
          >
            <Link href="/shortscriptlist" target={isMobile ? '_self' : '_self'} className="link-underline">
              Selected <br className="hidden md:block" /> Short <br className="hidden md:block" /> Scripts
            </Link>
          </div>

          <div
            className={` flex-1 text-center ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}
          >
            <Link href="/shortstorieslist" target={isMobile ? '_self' : '_self'} className="link-underline">
              Selected <br className="hidden md:block" /> Short <br className="hidden md:block" /> Stories
            </Link>
          </div>

          <div
            className={` flex-1 text-center ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}
          >
            <Link target={isMobile ? '_self' : '_self'} href="/cv" className="link-underline">
              CV
            </Link>
          </div>

          <div
            className={` flex-1 text-center ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}
          >
            <Link href="/poemlist" target={isMobile ? '_self' : '_self'} className="link-underline">
              Selected <br className="hidden md:block" /> Poems
            </Link>
          </div>

          <div
            className={` flex-1 text-center ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}
          >
            <Link target={isMobile ? '_self' : '_self'} href="/LatestFilm" className="link-underline">
              Latest&nbsp; <br className="hidden md:block" /> Film
            </Link>
          </div>
          {/* <div
            className={` ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}
          >
            <Link href="/ContactInfo" target="_self">Contact</Link>
          </div> */}

          {/* adjust the value of px in top-[px] to change the height between links and the credit */}
        </div>

        <div className="pt-5 md:text-[0.6em] text-[0.6em] flex justify-center credit-parent md:flex">
          <div className="text-center">
            <p>
              Copyright © 1987-2025{" "}
              <Link href="/ContactInfo" className="underline" target="_self">
                Bob Slaymaker
              </Link>
            </p>
            <p>
              Design by{" "}
              <Link href="/designerInfo" className="underline" target="_self">
                Muneeb Ahmad
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}