import { useRouter } from "next/router"
import { shortScripts } from "@/shortscripts"

export default function ShortScripts() {
    const router = useRouter()
    console.log(shortScripts)
    return (
        <div>
            {shortScripts?.map(shortScript => {
            
                if (shortScript?.title === router.query.shortscript) {
                    return <div className="font-serif font-semi bold #000000 background: hex #FDFEFF flex flex-col mt-10 mb-12 ml-10 text-2xl tracking-wider leading-relaxed line-height:-5 fontFamily: times roman">{shortScript.content}</div>
                }
            })}
        </div>
    )
}