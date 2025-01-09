import FormattedPoem from '@/components/PoemFormatter';
import Head from 'next/head';

export default function DesignerInfo() {
    return (
        <div className="goudy flex flex-col justify-center items-center tracking-wider leading-relaxed text-[26px] p-5 md:p-0">
            <Head>
                <title>Designer Info</title>
            </Head>
            <h6 className="goudy text-[32px] uppercase text-center mt-6">WEB DESIGN</h6>
            <div className="mt-3">
                <FormattedPoem content={<p className='text-[26px]'>Muneeb Ahmad</p>} />
                <FormattedPoem content={<p className='text-[26px]'>muneebahmad1268@gmail.com</p>} />
                <FormattedPoem content={<p className='text-[26px]'>+92–305–656–1268</p>} />
            </div>
        </div>
    )
} 