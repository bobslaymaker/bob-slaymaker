import { shortScripts } from "@/shortscripts"
import Link from "next/link"
import Head from 'next/head';

export default function ShortScripts() {
    return (
        <div className="goudy flex justify-center items-center p-[1em]">
            <Head>
                <title>Scripts</title>
            </Head>
            <div className="flex flex-col tracking-wider leading-relaxed text-[25px] md:text-[3vw] lg:text-[30px] 2xl:text-[2vw]">
                {shortScripts?.map(shortScript => (
                    <Link href={`shortscripts/${shortScript.title}`} target="_blank" className="link-underline">
                        {shortScript.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}
