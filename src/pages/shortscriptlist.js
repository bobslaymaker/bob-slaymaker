import { shortScripts } from "@/shortscripts"
import Link from "next/link"
import Head from 'next/head';

export default function ShortScripts() {
    return (
        <div className="goudy flex justify-center items-center p-[1em]">
            <Head>
                <title>Scripts</title>
            </Head>
            <div className="text-2xl flex flex-col tracking-wider leading-relaxed text-[24px] md:text-[2.9vw] lg:text-[27px]">
                {console.log("Short Scripts", shortScripts)}
                {shortScripts?.map(shortScript => (
                    <Link href={`shortscripts/${shortScript.title}`} target="_blank">
                        {shortScript.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}
