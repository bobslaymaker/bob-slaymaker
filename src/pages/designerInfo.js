import Head from 'next/head';

export default function DesignerInfo() {
    return (
        <div className="goudy flex justify-center items-center p-[1em]">
            <Head>
                <title>Designer Info</title>
            </Head>
            <div className="text-2xl flex flex-col tracking-wider leading-relaxed text-[24px] md:text-[2.9vw] lg:text-[27px]">
                <p>muneebahmad1268 at gmail dot com</p>
                <p>+92-305-6561268</p>
            </div>
        </div>
    )
} 