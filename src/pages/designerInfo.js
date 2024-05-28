import Head from 'next/head';

export default function DesignerInfo() {
    return (
        <div className="goudy flex justify-center items-center p-[1em]">
            <Head>
                <title>Designer Info</title>
            </Head>
            <div className="flex flex-col tracking-wider leading-relaxed text-[28px] md:text-[3vw] lg:text-[30px] 2xl:text-[2vw] ">
                <p>muneebahmad1268 at gmail dot com</p>
                <p>+92-305-6561268</p>
            </div>
        </div>
    )
} 