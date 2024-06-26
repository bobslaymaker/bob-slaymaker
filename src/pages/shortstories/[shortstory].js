import { useRouter } from "next/router"
import ShortStories from "../shortstorieslist"
import { shortStories } from "@/shortstories"
import Head from 'next/head';

export default function shortStory() {
    const router = useRouter()

    return (
        <div className="goudy flex justify-center w-full text-[22px] md:text-[25px] p-[1em] ">
            {shortStories?.map(shortStory => {
                if (shortStory?.title === router.query.shortstory) {
                    return <div className="w-full md:w-[750px]">
                        <Head>
                            <title>{shortStory?.label}</title>
                        </Head>
                        {shortStory.content}</div>

                }
            })}
        </div>
    )
}




