import { useRouter } from "next/router"
import { poems } from "@/poems"
import Head from 'next/head';
import FormattedPoem from "@/components/PoemFormatter";

export default function Poem() {
    const router = useRouter()
    return (
        <div className="goudy flex justify-center items-center p-[1em]">
            <div className="text-sm flex flex-col tracking-wider leading-relaxed text-[24px] md:text-[2.9vw] lg:text-[27px]">
                {poems?.map(poem => {
                    if (poem?.title === router.query.poem) {
                        return (
                            <div key={poem.title} className={`w-full ${poem.label === "Repulsive" ? "md:w-[820px]" : "md:w-[750px]"}`}>
                                <Head>
                                    <title>{poem.label}</title>
                                </Head>
                                <FormattedPoem content={poem.content} />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    )
}