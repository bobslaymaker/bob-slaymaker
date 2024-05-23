import { poems } from "../poems";
import Link from "next/link";
import Head from 'next/head';

export default function PoemList() {
  return (
    <div className="goudy flex justify-center items-center p-[1em]">
      <Head>
                <title>Poems</title>
            </Head>
      <div className="flex flex-col tracking-wider leading-relaxed text-[28px] md:text-[3vw] lg:text-[30px]">
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

