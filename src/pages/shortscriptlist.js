import { shortScripts } from "@/shortscripts"

export default function ShortScripts() {


    return (
        <div>
            <div className="font-serif font-semi bold #000000 background: hex #FDFEFF flex flex-col mt-12 mb-12 ml-14 ms-8 text-4xl tracking-wider leading-relaxed ml-12">
            {shortScripts?.map(shortscript => {
                return (<div>{shortscript?.content}</div>)
            })}
        </div>
        </div>
    )
}