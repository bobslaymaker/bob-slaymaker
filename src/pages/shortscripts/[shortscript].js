import { useRouter } from "next/router"
import { shortScripts } from "@/shortscripts"

export default function ShortScripts() {
    const router = useRouter()
    console.log(shortScripts)
    return (
        <div>
            {shortScripts?.map(shortScript => {
            
                if (shortScript?.title === router.query.shortscript) {
                    return <div className="font-georgia #000000 #EFF8FD text-4xl tracking-wider leading-relaxed mt-6 ml-12 mr-12 font-[500]">{shortScript.content}</div>
                }
            })}
        </div>
    )
}