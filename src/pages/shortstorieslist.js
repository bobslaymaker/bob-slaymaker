import { shortStories } from "@/shortstories"
import Link from "next/link"

export default function ShortStories() {


    return (
        <div className="goudy">
            <div className="container text-2xl flex flex-col tracking-wider leading-relaxed">
                {shortStories?.map(shortStory => {
                    return (
                        <Link href={`shortstories/${shortStory?.title}`}>{shortStory?.title}</Link>
                    )
                })}
             </div>
        </div>
    )
}