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
                
                <div className="mt-5">
                    <FormattedPoem content={<p>bobslaymaker@manyhandsllc dot us</p>} />
                    <FormattedPoem content={<p>+1–646–925–2509</p>} />
                </div>
            </div>
        </div>
    )
} 
