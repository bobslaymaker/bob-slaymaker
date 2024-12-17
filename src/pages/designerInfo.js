import FormattedPoem from '@/components/PoemFormatter';
import Head from 'next/head';

export default function DesignerInfo() {
    return (
        <div className="goudy flex flex-col justify-center items-center tracking-wider leading-relaxed text-[21px]">
            <Head>
                <title>Designer Info</title>
            </Head>
            <h6 className="goudy text-[32px] uppercase text-center mt-6">WEB DESIGN</h6>
            <div className="mt-5">
                <FormattedPoem content={<p className='text-[21px]'>Muneeb Ahmad</p>} />
                <FormattedPoem content={<p className='text-[21px]'>muneebahmad1268@gmail.com</p>} />
                <FormattedPoem content={<p className='text-[21px]'>+92–305–656–1268</p>} />
            </div>
        </div>
    )
} 