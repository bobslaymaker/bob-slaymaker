import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const customStyles = {
    verticalSpacing: {
      //change only the number
      sm: 'space-y-[10px]', //mobile (if you change the value here, also change the value of sm in linkSpacing)
      md: 'md:space-y-[10px]', //ipad/tablets/14" laptop (***change md and lg value for l)
      lg: 'lg:space-y-[10px]',  //large screens
    },
    linkSpacing: {
      sm: 'm-[10px]',
      md: 'md:ms-[15px] md:me-[15px]',
      lg: 'lg:ms-[15px] lg:me-[15px]',
    },
    horizontalLine: { //adjust horizontal line padding here ***remember to change the value of both pt and pb***
      sm: 'pt-[15px] pb-[15px]',
      md: 'md:pt-[15px] md:pb-[10px]',
      lg: 'lg:pt-[20px] lg:pb-[20px]',
    }
  };

  return (
    <div
      className={`font-[800] text-center flex flex-col items-center justify-center p-24 ${inter.className} space-x-5 `}
      style={{
        width: "100vw",
        height: "100vh",
        background: "#FDFEFF", // Fix the background color syntax
      }}
    >
      <div
        className={`text-center goudy text-[18px] md:text-[18px] ${customStyles.verticalSpacing.sm} ${customStyles.verticalSpacing.md} ${customStyles.verticalSpacing.lg}`}
      >
        <h1 className="font-bold text-[18px] md:text-[28px] m-[0px]">BOB SLAYMAKER</h1>
        <h1 className="font-variant: small cap text-[18px] md:text-[28px] m-[0px]">Writer-Filmmaker</h1>
        <div className={`flex items-center justify-center ${customStyles.horizontalLine.sm} ${customStyles.horizontalLine.md} ${customStyles.horizontalLine.lg}`}>
          <hr className="font-bold text-center" style={{ border: "1px solid black", width: "130px" }}></hr>
        </div>
      

                                                   
        <div className={`md:flex md:justify-center md:items-stretch`}>
          <div className={`font-bold  ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}>
            <Link href="/poemlist">Sample Poems</Link>
          </div>
          <div className={`font-bold  ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}>
            <Link href="/shortstorieslist">Sample Short Stories</Link>
          </div>
          <div className={`font-bold  ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}>
            <Link href="/shortscriptlist">Sample Short Scripts</Link>
          </div>
          <div className={`font-bold ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}>
            <Link target="_blank" href="https://vimeo.com/manage/videos/118768354/">
              My Last Film
            </Link>
          </div>
          <div className={`font-bold  ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}>
            <Link target="_blank" href="/cv/Writing Filmmaking CV 2023.pdf">
              CV
            </Link>
          </div>
          <div className={`font-bold ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}>
            <Link href="/ContactInfo">Contact</Link>
          </div>
        </div>

        <div className="hidden md:block text-[10px] flex justify-end credit-parent " style={{ position: 'relative' }}>
                             {/* to reduce gap between links and copyrights top-[10px] */}
          <div className="absolute bottom-[0px] right-[0px] top-[10px] ">
            <p className="text-left">© 1987–2023 Bob Slaymaker</p>
            <p>Website by Pichsereyvattana Chan</p>
          </div>
        </div>

        <div className="goudy md:hidden text-[10px]" style={{width: "100vw"}}>
            <p>© 1987–2023 Bob Slaymaker</p>
            <p>Website by Pichsereyvattana Chan</p>
        </div>
      </div>

    </div>
  );
}
