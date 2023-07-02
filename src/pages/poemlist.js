import {poems} from "../poems"
import Link from "next/link";

export default function PoemList() {
    return (<div className="goudy">
        
        <div className="container flex flex-col text-2xl tracking-wider leading-relaxed">
            {poems?.map((poem, index) => {
                return (
                    <Link href={`poems/${poem?.title}`} key={index}>{poem?.title}</Link>
                )
            })}
        </div>
        
    </div>)
}