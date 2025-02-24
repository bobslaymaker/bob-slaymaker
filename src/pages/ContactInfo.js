import { poems } from "../poems"
import Link from "next/link";
import Head from 'next/head';
import FormattedPoem from "@/components/PoemFormatter";

export default function ContactInfo() {
    return (
        <>
            <div className="goudy text-[21px] p-5 md:p-0">
                <Head>
                    <title>Contact</title>
                </Head>
                <h6 className="goudy text-[32px] text-center mt-6">bob at manyhandsllc dot us<br/>+1–646–925–2509</h6>
                <div className="mt-3 flex justify-center">
                    <div className="w-full md:w-[400px]">
                        <p className="text-[26px] break-all overflow-hidden"></p>
                        <p className="text-[26px]"></p>
                    </div>
                </div>
            </div>
        </>
    )
} 
