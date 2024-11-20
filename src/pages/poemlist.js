import { poems } from "../poems";
import Link from "next/link";
import Head from 'next/head';
import FormattedPoem from "@/components/PoemFormatter";

export default function PoemList() {
  return (
    <div>
      <h6 className="goudy text-[32px] uppercase text-center mt-10"><b/>POEMS<b/></h6>
      <h6 className="goudy text-[21px] text-center mx-3 bg-transparent mt-10 sm:hidden block">
        <span className="bg-yellow-200 px-1">
          (For author’s line breaks on phone, rotate phone to landscape view)
        </span>
      </h6>      <div className="goudy flex justify-center items-center p-[1em]">
        <Head>
          <title>Poems</title>
        </Head>
        <div className="flex flex-col tracking-wider leading-relaxed text-[26px] md:text-[26px] gap-5">
          {poems?.map((poem, index) => {
            return (
              <Link href={`poems/${poem?.label}`} key={index} target="_blank" className="link-underline">
                 <div className="leading-tight">{poem?.title}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
