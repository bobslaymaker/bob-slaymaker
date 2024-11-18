
import { useRouter } from "next/router"
import ShortScripts from "../shortscriptlist"
import { shortScripts } from "@/shortscripts"
import Head from 'next/head';

export default function shortScript() {
    const router = useRouter()

    return (
        <div className="goudy flex justify-center w-full text-[20px] md:text-[2.9vw] lg:text-[27px] p-[1em] ">
            {shortScripts?.map(shortScript => {
                if (shortScript?.label === router.query.shortscript) {
                    return <div className="w-full md:w-[750px]">
                        <Head>
                            <title>{shortScript.title}</title>
                        </Head>
                        <h6 className="text-[12px] uppercase text-center mt-5">SHORT SCRIPTS</h6>
                        <h1 className="text-[30px] md:text-[42px] text-center mt-5">{shortScript.title}</h1>
                        <div className="text-[21px]">{shortScript.content}</div>
                        <div className="text-[21px] mt-4">{shortScript.credits}</div>
                    </div>
                }
            })}
        </div>
    )
}