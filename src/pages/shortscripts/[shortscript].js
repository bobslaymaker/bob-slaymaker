
import { useRouter } from "next/router"
import ShortScripts from "../shortscriptlist"
import { shortScripts } from "@/shortscripts"
import Head from 'next/head';
import Link from "next/link";

export default function shortScript() {
    const router = useRouter()

    return (
        <div className="goudy flex justify-center w-full text-[20px] md:text-[2.9vw] lg:text-[27px] p-6 md:p-6">
            {shortScripts?.map(shortScript => {
                if (shortScript?.label === router.query.shortscript) {
                    return <div className="w-full md:w-[750px]">
                        <Head>
                            <title>{shortScript.title}</title>
                        </Head>
                        <Link href="/shortscriptlist">
                        <h6 className="text-[12px] uppercase text-center mt-0">SHORT SCRIPTS</h6>
</Link>
                        <h1 className="text-[30px] md:text-[42px] text-center mt-3 leading-tight">{shortScript.title}</h1>
                        <div className="text-[21px mt-4]">{shortScript.content}</div>
                        <div className="text-[21px] mt-4">{shortScript.credits}</div>
                    </div>
                }
            })}
        </div>
    )
}