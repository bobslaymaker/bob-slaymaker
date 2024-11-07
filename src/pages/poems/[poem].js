import { useRouter } from "next/router"
import { poems } from "@/poems"
import Head from 'next/head';
import FormattedPoem from "@/components/PoemFormatter";

export default function Poem() {
    const router = useRouter()
    return (
        <div className="goudy flex justify-center items-center p-[1em]">
            <div className="flex flex-col tracking-wider leading-relaxed text-[18px] md:text-[2.9vw] lg:text-[27px]">
                {poems?.map(poem => {
                    if (poem?.label === router.query.poem) {
                        return (
                            <div key={poem.title} className={`w-full ${poem.label === "Repulsive" ? "md:w-[820px]" : "md:w-[750px]"}`}>
                                <Head>
                                    <title>{poem.label}</title>
                                </Head>
                                <h6 className="text-[12px] uppercase text-center mt-6">POEMS</h6>
                                <h1 className="text-[30px] md:text-[42px] text-center">{poem.title}</h1>
                                <div className="text-[21px]"><FormattedPoem content={poem.content} /></div>
                                <div className="text-[21px] mt-4">{poem.credits}</div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    )
}
