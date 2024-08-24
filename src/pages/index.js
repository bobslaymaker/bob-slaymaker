import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      className={`font-[800] text-center flex flex-col items-center justify-center lg:p-24 p-2 ${inter.className} space-x-5 mb-[0px] bg-red-500`}
      style={{
        width: "100vw",
        height: "100vh",
        maxHeight: "100vh",
        background: "#FDFEFF", // Fix the background color syntax
        overflowX: "hidden",
        // overflowY: "hidden",
      }}
    >
      <div
        className={`text-center goudy w-[95%] text-[25px] lg:text-[2.5vw]  ${customStyles.verticalSpacing.sm} ${customStyles.verticalSpacing.md} ${customStyles.verticalSpacing.lg} `}
      >
        <div className="space-y-[0px]">
          <h1 className="font-bold text-[36px] md:text-[4.5vw] pb-[5px] md:pb-[0px] hidden md:block">
            BOB SLAYMAKER
          </h1>
          <h1
            className="font-bold text-[36px] md:text-[4.5vw] pb-[5px] md:pb-[0px] block md:hidden"
                      >
            BOB SLAYMAKER
          </h1>
          <h1
            className=" text-[36px] md:text-[4.5vw] p-[0px]"
            style={{ fontVariant: "small-caps" }}
          >
            Writer–Filmmaker
          </h1>
        </div>

        <div
          className={`pt-[15px] pb-[15px] md:pt-[0px] md:pb-[0px] flex items-center justify-center ${customStyles.horizontalLine.sm} ${customStyles.horizontalLine.md} ${customStyles.horizontalLine.lg}`}
        >
          <hr
            className="font-bold text-center"
            style={{ border: "1px solid black", width: "130px" }}
          ></hr>
        </div>

        <div
          className={`flex md:flex-row flex-col justify-between`}
          style={{ position: "relative", inset: "0px" }}
        >

          <div
            className={`font-bold  ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}
          >
            <Link href="/shortscriptlist" target="_blank" className="link-underline">
              Selected <br className="hidden md:block" /> Short <br className="hidden md:block" /> Scripts
            </Link>
          </div>

          <div
            className={`font-bold  ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}
          >
            <Link href="/shortstorieslist" target="_blank" className="link-underline">
              Selected <br className="hidden md:block" /> Short <br className="hidden md:block" /> Stories
            </Link>
          </div>

          <div
            className={`font-bold ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}
          >
            <Link target="_blank" href="/cv" className="link-underline">
              CV
            </Link>
          </div>





          <div
            className={`font-bold  ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}
          >
            <Link href="/poemlist" target="_blank" className="link-underline"> 
              Selected <br className="hidden md:block" /> Poems
            </Link>
          </div>


          <div
            className={`font-bold  ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}
          >
            <Link target="_blank" href="/myLastFilm" className="link-underline">
              My Last&nbsp; <br className="hidden md:block" /> Film
            </Link>
          </div>
          {/* <div
            className={`font-bold ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}
          >
            <Link href="/ContactInfo" target="_blank">Contact</Link>
          </div> */}

          {/* adjust the value of px in top-[px] to change the height between links and the credit */}
        </div>
        <div
          className="hidden md:block text-[0.4em] flex justify-end credit-parent pt-5"
        >
          <p className="text-center">Copyright © 1987–2024 <Link href="/ContactInfo" className="underline" target="_blank"> Bob Slaymaker </Link></p>
          <div className="h-2"></div>
          <p className="text-center">Design by <Link href="/designerInfo" className="underline" target="_blank"> Muneeb Ahmad</Link></p>
        </div>

        <div
          className="goudy md:hidden text-[0.5em] pt-[60px]"
        >
          <p className="text-center">Copyright © 1987–2024 <Link href="/ContactInfo" className="underline" target="_blank"> Bob Slaymaker </Link></p>
          <div className="h-2"></div>
          <p className="text-center">Design by <Link href="/designerInfo" className="underline" target="_blank"> Muneeb Ahmad</Link></p>
        </div>
      </div>
    </div>
  );
}