import FormattedPoem from '@/components/PoemFormatter';
import Head from 'next/head';

export default function DesignerInfo() {
    return (
        <div className="goudy flex justify-center items-center p-[1em]">
            <Head>
                <title>Designer Info</title>
            </Head>
            <div className="flex flex-col tracking-wider leading-relaxed text-[21px]">
                <FormattedPoem content={<p>muneebahmad1268 at gmail dot com</p>} />
                <FormattedPoem content={<p>+92–305–656–1268</p>} />
            </div>
        </div>
    )
} 
