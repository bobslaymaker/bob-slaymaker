import { poems } from "../poems";
import Link from "next/link";
import Head from 'next/head';

export default function PoemList() {
  return (
    <div className="p-5 md:p-0"> 
      <Head>
        <title>Poems</title>
      </Head>
      <h6 className="goudy text-[32px] uppercase text-center mt-6"><b />POEMS<b /></h6>
      <h6 className="goudy text-[21px] text-center mx-3 bg-transparent mt-1 sm:hidden block">
        <span className="leading-tight px-1">
          (For author’s line breaks on phone, rotate phone to landscape view)
        </span>
      </h6>
      <div className="goudy flex justify-start sm:justify-center items-center mt-0">
        <div className="flex flex-col tracking-wider leading-relaxed text-[26px] md:text-[26px]">
          {poems?.map((poem, index) => {
            return (
              <Link href={`poems/${poem?.label}`} key={index} target="_blank" className="link-underline">
                {poem?.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}