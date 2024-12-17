import { shortStories } from "@/shortstories"
import Link from "next/link"
import Head from 'next/head';
import FormattedPoem from "@/components/PoemFormatter";

export default function ShortStories() {
    return (
        <div>
            <h6 className="goudy text-[32px] uppercase text-center mt-3"><b/>SHORT STORIES<b/></h6>
            <div className="goudy flex justify-center items-center p-[1em] mt-3">
                <Head>
                    <title>Stories</title>
                </Head>
                <div className="flex flex-col tracking-wider leading-relaxed text-[26px] md:text-[26px] gap-3 ">
                    {shortStories?.map(shortStory => {
                        return (
                            <Link href={`shortstories/${shortStory?.label}`} target="_blank" className="link-underline">
                                <div className="leading-tight">{shortStory?.title}</div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
