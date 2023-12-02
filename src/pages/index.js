import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
const customStyles = {
verticalSpacing: {
sm: 'space-y-2', // Example for small screens
md: 'md:space-y-4', // Medium screens
lg: 'lg:space-y-6', // Large screens
},
textSize: {
sm: 'text-[20px] sm:text-[24px]', // Start smaller for phones
md: 'md:text-[26px]', // Medium size for tablets/small laptops
lg: 'lg:text-[30px]', // Larger size for desktops
},
spaceY: {
sm: 'space-y-2', // Example for small screens
md: 'md:space-y-4', // Medium screens
lg: 'lg:space-y-6', // Large screens
},
linkSpacing: {
sm: 'm-[10px]',
md: 'md:ms-[15px] md:me-[15px]',
lg: 'lg:ms-[15px] lg:me-[15px]',
},
horizontalLine: { //adjust horizontal line padding here ***remember to change the value of both pt and pb***
sm: 'pt-[0px] pb-[0px]',
md: 'md:pt-[15px] md:pb-[10px]',
lg: 'lg:pt-[20px] lg:pb-[20px]',
}
};
return (
<div
className={`font-[800] text-center flex flex-col items-center justify-center p-24 ${inter.className} space-x-5 mb-[0px] bg-red-500`}
style={{
width: "100vw",
height: "100vh",
maxHeight: "100vh",
background: "#FDFEFF", // Fix the background color syntax
overflowX: "hidden",
overflowY: "hidden"
}}
>
<div
className={`text-center goudy ${customStyles.textSize.sm} ${customStyles.textSize.md} ${customStyles.textSize.lg} ${customStyles.verti
>// here
<div className={`${customStyles.spaceY.sm} ${customStyles.spaceY.md} ${customStyles.spaceY.lg}`}>
<h1 className="font-bold text-[30px] md:text-[42px] lg:text-[60px] pb-[20px] md:pb-[0px]">BOB SLAYMAKER</h1>
<h1 className=" text-[30px] md:text-[42px] p-[0px]" style={{fontVariant: "small-caps"}}>Writer-Filmmaker</h1>
</div>
<div className={`pt-[30px] pb-[30px] md:pt-[0px] md:pb-[0px] flex items-center justify-center ${customStyles.horizontalLine.sm} ${c
<hr className="font-bold text-center" style={{ border: "1px solid black", width: "130px" }}></hr>
</div>
<div className={`md:flex md:justify-center md:items-stretch`} style={{position: "relative", inset: "0px"}}>
<div className={`font-bold ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}>
<Link href="/poemlist">Sample Poems</Link>
</div>
<div className={`font-bold ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}>
<Link href="/shortstorieslist">Sample Short Stories</Link>
</div>
<div className={`font-bold ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}>
<Link href="/shortscriptlist">Sample Short Scripts</Link>
</div>
<div className={`font-bold ${customStyles.linkSpacing.sm} ${customStyles.linkSpacing.md} ${customStyles.linkSpacing.lg}`}>
<Link target="_blank" href="/cv/Writing Filmmaking CV 2023.pdf">
CV