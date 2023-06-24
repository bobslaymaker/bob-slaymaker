import { useRouter } from "next/router"
import { poems } from "@/poems"

export default function Poem() {
    const router = useRouter()

    return (
        <div>
            {poems?.map(poem => {
                if (poem?.title === router.query.poem) {
                    return <div className="font-serif font-semi bold #000000 #EFF8FD text-2xl tracking-wider leading-relaxed mt-6 mb-6 ml-12 mr-12 fontFamily: times roman">{poem.content}</div>
                }
            })}
        </div>
    )
}