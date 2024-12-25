import { shortStories } from "@/shortstories"
import Link from "next/link"
import Head from 'next/head';
import FormattedPoem from "@/components/PoemFormatter";

export default function ShortStories() {
    return (
        <div className="p-5 md:p-0">
            <Head>
                <title>Stories</title>
            </Head>
            <h6 className="goudy text-[32px] uppercase text-center mt-6"><b />SHORT STORIES<b /></h6>
            <div className="goudy flex justify-start sm:justify-center items-center mt-3">
                <div className="flex flex-col tracking-wider leading-relaxed text-[26px] md:text-[26px]">
                    {shortStories?.map(shortStory => {
                        return (
                            <Link href={`shortstories/${shortStory?.label}`} target="_blank" className="link-underline">
                                {shortStory?.title}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}