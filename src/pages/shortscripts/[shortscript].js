import { useRouter } from "next/router"
import ShortScripts from "../shortscriptlist"
import { shortScripts } from "@/shortscripts"
import Head from 'next/head';

export default function shortScript() {
    const router = useRouter()

    return (
        <div className="goudy flex justify-center w-full text-[26px] md:text-[2.9vw] lg:text-[27px] p-[1em] ">
            {shortScripts?.map(shortScript => {
                if (shortScript?.title === router.query.shortscript) {
                    return <div className="w-full md:w-[750px]">
                        <Head>
                <title>{shortScript.title}</title>
            </Head>
                        
                        {shortScript.content}</div>
                    
                }
            })}
        </div>
    )
}