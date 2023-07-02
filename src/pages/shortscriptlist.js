import { shortScripts } from "@/shortscripts"

export default function ShortScripts() {


    return (
        <div className="goudy">
            <div className="container flex flex-col text-2xl tracking-wider leading-relaxed">
            {shortScripts?.map(shortscript => {
                return (<div>{shortscript?.content}</div>)
            })}
        </div>
        </div>
    )
}