import { poems } from "../poems";
import Link from "next/link";
import Head from 'next/head';
import FormattedPoem from "@/components/PoemFormatter";

export default function PoemList() {
  return (
    <div>
      <h6 className="goudy text-[32px] uppercase text-center mt-10"><b/>POEMS<b/></h6>
      <div className="goudy flex justify-center items-center p-[1em]">
        <Head>
          <title>Poems</title>
        </Head>
        <div className="flex flex-col tracking-wider leading-relaxed text-[26px] md:text-[26px]">
          {poems?.map((poem, index) => {
            return (
              <Link href={`poems/${poem?.label}`} key={index} target="_blank" className="link-underline">
                <FormattedPoem content={<>{poem?.title}</>} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
