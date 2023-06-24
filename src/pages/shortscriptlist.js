import { shortScripts } from "@/shortscripts"

export default function ShortScripts() {


    return (
        <div>
            <div className="flex flex-col ms-8">
            {shortScripts?.map(shortscript => {
                return (<div>{shortscript?.content}</div>)
            })}
        </div>
        </div>
    )
}