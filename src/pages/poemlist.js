import {poems} from "../poems"


export default function PoemList() {
    return (<div className="">
        
        <div className="font-serif font-semi bold #000000 background: hex #FDFEFF flex flex-col mt-12 mb-12 ml-14 ms-8 text-4xl tracking-wider leading-relaxed ml-12">
            {poems?.map(poem => {
                return (
                    <Link href={`poems/${poem?.title}`}>{poem?.title}</Link>
                )
            })}
        </div>
        
    </div>)
}