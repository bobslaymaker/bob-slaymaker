import { shortStories } from "@/shortstories"
import Link from "next/link"
import Head from 'next/head';
import FormattedPoem from "@/components/PoemFormatter";

export default function ShortStories() {
    return (
        <div className="goudy flex justify-center items-center p-[1em]">
            <Head>
                <title>Stories</title>
            </Head>
            <div className="flex flex-col tracking-wider leading-relaxed text-[28px] md:text-[3vw] lg:text-[30px] 2xl:text-[2vw] ">
                {shortStories?.map(shortStory => {
                    return (
                        <Link href={`shortstories/${shortStory?.title}`} target="_blank">
                            <FormattedPoem content={<>{shortStory?.title}</>} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}