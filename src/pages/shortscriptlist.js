import { shortScripts } from "@/shortscripts"
import Link from "next/link"

export default function ShortScripts() {
    return (
        <div className="goudy flex justify-center items-center p-[1em]">
            <div className="text-2xl flex flex-col tracking-wider leading-relaxed text-[24px] md:text-[2.9vw] lg:text-[27px]">
                {console.log("Short Scripts", shortScripts)}
                {shortScripts?.map(shortScript => (
                    <Link href={`shortscripts/${shortScript.title}`}>
                        {shortScript.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}