import { poems } from "../poems"
import Link from "next/link";
import Head from 'next/head';
import FormattedPoem from "@/components/PoemFormatter";

export default function ContactInfo() {
    return (
        <>
            <div className="goudy text-[21px] p-5 md:p-0 mt-6">
                <Head>
                    <title>Contact</title>
                </Head>
                <div className="mt-3 flex justify-center">
                    <div className="w-full md:w-[300px]">
                        <p className="text-[26px]">bob at many–hands dot us</p>
                        <p className="text-[26px] break-all overflow-hidden">+1–646–925–2509</p>
                    </div>
                </div>
            </div>
        </>
    )
} 

