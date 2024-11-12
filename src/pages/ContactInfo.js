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
            <div className="flex flex-col tracking-wider leading-relaxed text-[21px]">
            <h1 className="text-[32px] text-center my-5">CONTACT BOB</h1>
                <FormattedPoem content={<p>bob@manyhandsllc dot us</p>} />
                <FormattedPoem content={<p>+1–646–925–2509</p>} />
            </div>
        </div>
    )
} 