import {poems} from "../poems"
import Link from "next/link";

export default function PoemList() {
    return (<div className="">
        
        <div className="font-serif font-semi bold #000000 background: hex #FDFEFF flex flex-col mt-12 mb-12 ml-14 ms-8 text-2xl tracking-wider leading-relaxed ml-12 fontFamily: times roman">
            {poems?.map((poem, index) => {
                return (
                    <Link href={`poems/${poem?.title}`} key={index}>{poem?.title}</Link>
                )
            })}
        </div>
        
    </div>)
}