import { poems } from "../poems";
import Link from "next/link";
import Head from 'next/head';

export default function PoemList() {
  return (
    <div className="goudy flex justify-center items-center p-[1em]">
      <Head>
                <title>Poems</title>
            </Head>
      <div className="text-2xl flex flex-col tracking-wider leading-relaxed text-[24px] md:text-[2.9vw] lg:text-[27px]">
        {poems?.map((poem, index) => {
          return (
            <Link href={`poems/${poem?.title}`} key={index} target="_blank">
              {poem?.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}