import { poems } from "../poems"
import Link from "next/link";
import Head from 'next/head';
import FormattedPoem from "@/components/PoemFormatter";

export default function ContactInfo() {
    return (
        <div className="goudy flex justify-center items-center p-[1em]">
            <Head>
                <title>Contact</title>
            </Head>
            <div className="flex flex-col tracking-wider leading-relaxed text-[28px] md:text-[3vw] lg:text-[30px] 2xl:text-[2vw] ">
                <FormattedPoem content={<p>bobslaymaker at gmail dot com</p>} />
                <FormattedPoem content={<p>+1–646–925–2509</p>} />
            </div>
        </div>
    )
} 