import FormattedPoem from '@/components/PoemFormatter';
import Head from 'next/head';

export default function DesignerInfo() {
    return (
        <>
            <div className="goudy text-[21px] p-5 md:p-0">
                <Head>
                    <title>Designer Info</title>
                </Head>
                <h6 className="goudy text-[32px] text-center uppercase mt-6">WEB DESIGN</h6>
                <div className="mt-3 flex justify-center">
                    <div className="w-full md:w-[400px]">
                        <p className="text-[26px]">Muneeb Ahmad</p>
                        <p className="text-[26px] break-all overflow-hidden">muneebahmad1268@gmail.com</p>
                        <p className="text-[26px]">+92–305–656–1268</p>
                    </div>
                </div>
            </div>
        </>
    )
}

