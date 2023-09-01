import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const verticalSpacing = 20
  return (
    <div
      className={`font-[800] text-center flex flex-col items-center justify-center p-24 ${inter.className} space-x-5 `}
      style={{
        width: "100vw",
        height: "100vh",
        background: "hex #FDFEFF",
      }}
    >
      {/* 768px */}
      <div className={`text-center goudy text-[18px] md:text-[17px] space-y-[${verticalSpacing}px]`} style={{ width: "100vw"}}>
        
        <h1 className="font-bold text-[18px] md:text-[22px] ">BOB SLAYMAKER</h1>
        <h1 className="font-bold text-[18px] md:text-[22px] ">WRITER–FILMMAKER</h1>
        <div className="flex items-center justify-center ">
          <hr className="font-bold text-center" style={{ border: "1px solid black", width: "200px" }}></hr>
        </div>

        <div className={`grid grid-cols md:flex md:justify-center space-y-[${verticalSpacing}px] `}> 
          <div className="font-bold md:m-5">
            <Link href="/poemlist">Sample Poems</Link>
          </div>

          <div className="font-bold md:m-5">
            <Link href="/shortstorieslist">Sample Short Stories</Link>
          </div>

          <div className="font-bold md:m-5">
            <Link href="/shortscriptlist">Sample Short Scripts</Link>
          </div>

          <div className="font-bold md:m-5">
            <Link target="_blank" href="https://vimeo.com/manage/videos/118768354/">
              My Last Film
            </Link>
          </div>
          <div className="font-bold md:m-5">
            <Link target="_blank" href="/cv/Writing Filmmaking CV 2023.pdf">
              CV
            </Link>
          </div>
          <div className="font-bold md:m-5">
            <Link href="/ContactInfo">Contact</Link>
          </div>
        </div>
        <div className="grid grid-cols-12 text-[10px] mt-5">
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
