import { useRouter } from "next/router"
import ShortStories from "../shortstorieslist"
import { shortStories } from "@/shortstories"
import Head from 'next/head';

export default function shortStory() {
    const router = useRouter()

    return (
        <div className="goudy flex justify-center w-full text-[20px] md:text-[2.9vw] lg:text-[27px] p-[1em] ">
            {shortStories?.map(shortStory => {
                if (shortStory?.label === router.query.shortstory) {
                    return <div className="w-full md:w-[750px]">
                        <Head>
                            <title>{shortStory?.label}</title>
                        </Head>
                        <h1 className="text-[30px] md:text-[42px] text-center">{shortStory.title}</h1>
                        <div className="text-[21px]">{shortStory.content}</div>
                    </div>
                }
            })}
        </div>
    )
}