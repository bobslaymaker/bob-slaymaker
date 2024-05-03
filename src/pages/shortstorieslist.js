import { shortStories } from "@/shortstories"
import Link from "next/link"

export default function ShortStories() {


    return (
        <div className="goudy flex justify-center items-center p-[1em]">
            <div className="text-2xl flex flex-col tracking-wider leading-relaxed text-[24px] md:text-[2.9vw] lg:text-[27px]">
                {shortStories?.map(shortStory => {
                    return (
                        <Link href={`shortstories/${shortStory?.title}`}>{shortStory?.title}</Link>
                    )
                })}
            </div>
        </div>
    )
}