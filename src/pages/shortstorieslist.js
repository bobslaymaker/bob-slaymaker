import { shortStories } from "@/shortstories"
import Link from "next/link"
import Head from 'next/head';

export default function ShortStories() {


    return (
        <div className="goudy flex justify-center items-center p-[1em]">
            <Head>
                <title>Stories</title>
            </Head>
            <div className="text-2xl flex flex-col tracking-wider leading-relaxed text-[24px] md:text-[2.9vw] lg:text-[27px]">
                {shortStories?.map(shortStory => {
                    return (
                        <Link href={`shortstories/${shortStory?.title}`} target="_blank">{shortStory?.title}</Link>
                    )
                })}
            </div>
        </div>
    )
}
