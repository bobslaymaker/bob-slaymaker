import { useRouter } from "next/router"
import ShortStories from "../shortstorieslist"
import { shortStories } from "@/shortstories"


export default function shortStory() {
    const router = useRouter()

    return (
        <div className="goudy font-size-add mx-auto w-full md:w-[70vw] lg:w-[70vw] 2xl:w-[30vw] text-[24px] md:text-[2.9vw] lg:text-[27px] p-[1em] ">
            {shortStories?.map(shortStory => {
                if (shortStory?.title === router.query.shortstory) {
                    return <div className="">{shortStory.content}</div>
                    
                }
            })}
        </div>
    )
}

