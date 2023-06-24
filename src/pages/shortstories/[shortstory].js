import { useRouter } from "next/router"
import ShortStories from "../shortstorieslist"
import { shortStories } from "@/shortstories"

export default function shortStory() {
    const router = useRouter()

    return (
        <div>
            {shortStories?.map(shortStory => {
                if (shortStory?.title === router.query.shortstory) {
                    return <div className="font-serif font-semi bold #000000 background: hex #FDFEFF flex flex-col mt-12 mb-12 ml-12 ms-8 text-2xl tracking-wider leading-relaxed fontfamily=times roman">{shortStory.content}</div>
                    
                }
            })}
        </div>
    )
}