import { useRouter } from "next/router"
import ShortStories from "../shortstorieslist"
import { shortStories } from "@/shortstories"

export default function shortStory() {
    const router = useRouter()

    return (
        <div className="goudy container text-2xl">
            {shortStories?.map(shortStory => {
                if (shortStory?.title === router.query.shortstory) {
                    return <div className="">{shortStory.content}</div>
                    
                }
            })}
        </div>
    )
}