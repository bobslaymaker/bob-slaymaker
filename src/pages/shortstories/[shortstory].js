import { useRouter } from "next/router"
import ShortStories from "../shortstorieslist"
import { shortStories } from "@/shortstories"

export default function shortStory() {
    const router = useRouter()

    return (
        <div>
            {shortStories?.map(shortStory => {
                if (shortStory?.title === router.query.shortstory) {
                    return <div className="font-georgia #000000 #EFF8FD text-4xl tracking-wider leading-relaxed mt-6 ml-12 mr-12 font-[500]">{shortStory.content}</div>
                    
                }
            })}
        </div>
    )
}