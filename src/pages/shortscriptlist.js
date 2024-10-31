import { shortScripts } from "@/shortscripts"
import Link from "next/link"
import Head from 'next/head';

export default function ShortScripts() {
    return (
        <div>
            <h6 className="goudy text-[32px] uppercase text-center mt-10"><b/>SHORT SCRIPTS<b/></h6>
            <div className="goudy flex justify-center items-center p-[1em]">
                <Head>
                    <title>Scripts</title>
                </Head>
                <div className="flex flex-col tracking-wider leading-relaxed text-[26px] md:text-[26px]">
                    {shortScripts?.map(shortScript => (
                        <Link href={`shortscripts/${shortScript.label}`} target="_blank" className="link-underline">
                            {shortScript.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

