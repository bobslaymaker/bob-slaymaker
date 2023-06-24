import { shortStories } from "@/shortstories"
import Link from "next/link"

export default function ShortStories() {


    return (
        <div>
            <div className="font-serif font-semi bold #000000 background: hex #FDFEFF flex flex-col mt-12 mb-12 ml-14 ms-8 text-4xl tracking-wider leading-relaxed ml-12">
            {shortStories?.map(shortStory => {
                return (
                    <Link href={`shortstories/${shortStory?.title}`}>{shortStory?.title}</Link>
                )
            })}
        </div>
        </div>
    )
}