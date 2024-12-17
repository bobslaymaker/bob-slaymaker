import FormattedPoem from '@/components/PoemFormatter';
import Head from 'next/head';

export default function DesignerInfo() {
    return (
        <div className="goudy flex justify-center items-center p-[1em]">
            <Head>
                <title>Designer Info</title>
            </Head>
            <div className="flex flex-col tracking-wider leading-relaxed text-[21px]">
                <h1 className="text-[32px] text-center mt-5">WEB DESIGN</h1>
                <div className="mt-5">
                    <FormattedPoem content={<p className='text-[21px]'>Muneeb Ahmad</p>} />
                    <FormattedPoem content={<p className='text-[21px]'>muneebahmad1268@gmail.com</p>} />
                    <FormattedPoem content={<p className='text-[21px]'>+92–305–656–1268</p>} />
                </div>
            </div>
        </div>
    )
} 