import { shortStories } from "@/shortstories"
import Link from "next/link"
import Head from 'next/head';
import FormattedPoem from "@/components/PoemFormatter";

export default function ShortStories() {
    return (
        <div>
            <h6 className="goudy text-[36px] uppercase text-center mt-10"><b/>SHORT STORIES<b/></h6>
            <div className="goudy flex justify-center items-center p-[1em]">
                <Head>
                    <title>Stories</title>
                </Head>
                <div className="flex flex-col tracking-wider leading-relaxed text-[30px] md:text-[36px] ">
                    {shortStories?.map(shortStory => {
                        return (
                            <Link href={`shortstories/${shortStory?.label}`} target="_blank" className="link-underline">
                                <FormattedPoem content={<>{shortStory?.title}</>} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


