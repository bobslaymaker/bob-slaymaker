import { poems } from "../poems"
import Link from "next/link";
import Head from 'next/head';
export default function ContactInfo() {
    return (
        <div className="goudy flex justify-center items-center p-[1em]">
            <Head>
                <title>Contact</title>
            </Head>
            <div className="text-2xl flex flex-col tracking-wider leading-relaxed text-[24px] md:text-[2.9vw] lg:text-[27px]">
                <p>bobslaymaker at gmail dot com</p>
                <p>+1-646-925-2509</p>
            </div>
        </div>
    )
}