import { shortScripts } from "@/shortscripts"
import Link from "next/link"
import Head from 'next/head';

export default function ShortScripts() {
    return (
        <div className="goudy flex justify-center items-center p-[1em]">
            <Head>
                <title>Scripts</title>
            </Head>
            <div className="flex flex-col tracking-wider leading-relaxed text-[30px] md:text-[36px]">
                {shortScripts?.map(shortScript => (
                    <Link href={`shortscripts/${shortScript.label}`} target="_blank" className="link-underline">
                        {shortScript.label}
                    </Link>
                ))}
            </div>
        </div>
    )
}

