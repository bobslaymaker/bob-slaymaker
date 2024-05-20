import { useRouter } from "next/router"
import ShortScripts from "../shortscriptlist"
import { shortScripts } from "@/shortscripts"

export default function shortScript() {
    const router = useRouter()

    return (
        <div className="goudy flex justify-center w-full text-[22px] md:text-[25px] p-[1em] ">
            {shortScripts?.map(shortScript => {
                if (shortScript?.title === router.query.shortscript) {
                    return <div className="w-full md:w-[750px]">{shortScript.content}</div>
                    
                }
            })}
        </div>
    )
}