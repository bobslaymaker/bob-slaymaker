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
      lg: 'lg:ms-[30px] lg:me-[30px]',
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
        // style={{ width: "100vw" }}
      >
        <h1 className="font-bold text-[18px] md:text-[23px] ">BOB SLAYMAKER</h1>
        <h1 className="font-bold text-[18px] md:text-[23px] ">WRITER–FILMMAKER</h1>
        <div className="flex items-center justify-center">
          <hr className="font-bold text-center" style={{ border: "1px solid black", width: "200px" }}></hr>
        </div>

        <div className={`md:flex md:justify-center md:items-stretch`}>
          <div className={`font-bold ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg} md:m-5`}>
            <Link href="/poemlist">Sample Poems</Link>
          </div>

          <div className={`font-bold ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg} md:m-5`}>
            <Link href="/shortstorieslist">Sample Short Stories</Link>
          </div>

          <div className={`font-bold ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg} md:m-5`}>
            <Link href="/shortscriptlist">Sample Short Scripts</Link>
          </div>

          <div className={`font-bold ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg} md:m-5`}>
            <Link target="_blank" href="https://vimeo.com/manage/videos/118768354/">
              My Last Film
            </Link>
          </div>
          <div className={`font-bold ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg} md:m-5`}>
            <Link target="_blank" href="/cv/Writing Filmmaking CV 2023.pdf">
              CV
            </Link>
          </div>
          <div className={`font-bold ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg} md:m-5`}>
            <Link href="/ContactInfo">Contact</Link>
          </div>
        </div>
        <div className="grid grid-cols-12 text-[10px]">
          <div className="col-span-6 flex items-start">
            <p className=""></p>
          </div>
          <div className="col-span-6 text-center">
            <p>© 1987–2023 Bob Slaymaker<br />
              Website by Pichsereyvattana Chan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
