import { poems } from "../poems";
import Link from "next/link";
import Head from 'next/head';
import FormattedPoem from "@/components/PoemFormatter";

export default function PoemList() {
  return (
    <div className="goudy flex justify-center items-center p-[1em]">
      <Head>
        <title>Poems</title>
      </Head>
      <div className="flex flex-col tracking-wider leading-relaxed text-[30px] md:text-[36px]">
        {poems?.map((poem, index) => {
          return (
            <Link href={`poems/${poem?.label}`} key={index} target="_blank" className="link-underline">
              <FormattedPoem content={<>{poem?.title}</>} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}