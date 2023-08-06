import { useRouter } from "next/router"
import { shortScripts } from "@/shortscripts"

export default function ShortScripts() {
    const router = useRouter()
    console.log(shortScripts)
    return (
        <div className="goudy container text-2xl">
            {shortScripts?.map(shortScript => {
            
                if (shortScript?.title === router.query.shortscript) {
                    return <div className="">{shortScript.content}</div>
                }
            })}
        </div>
    )
}