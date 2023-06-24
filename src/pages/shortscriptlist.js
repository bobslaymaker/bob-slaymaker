import { shortScripts } from "@/shortscripts"

export default function ShortScripts() {


    return (
        <div>
            <div className="font-serif font-semi bold #000000 background: hex #FDFEFF mt-8 mb-12 ml-8 ms-4 text-2xl tracking-wider leading-relaxed fontFamily: times roman">
            {shortScripts?.map(shortscript => {
                return (<div>{shortscript?.content}</div>)
            })}
        </div>
        </div>
    )
}