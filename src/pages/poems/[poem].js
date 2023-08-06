import { useRouter } from "next/router"
import { poems } from "@/poems"

export default function Poem() {
    const router = useRouter()

    return (
        <div className="goudy container text-2xl">
            {poems?.map(poem => {
                if (poem?.title === router.query.poem) {
                    return <div className="">{poem.content}</div>
                }
            })}
        </div>
    )
}