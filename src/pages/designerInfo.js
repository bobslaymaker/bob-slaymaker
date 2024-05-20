import { poems } from "../poems"
import Link from "next/link";

export default function DesignerInfo() {
  return (
    <div className="goudy flex justify-center items-center p-[1em]">
      <div className="text-2xl flex flex-col tracking-wider leading-relaxed text-[24px] md:text-[2.9vw] lg:text-[27px]">
        <a className="underline text-purple-700" href={`mailto:muneebahmad.1268@gmail.com`}>muneebahmad.1268@gmail.com</a>
        <a
        className="underline text-purple-700"
          href={`https://wa.me/923056561268`}
          target="_blank"
          rel="noopener noreferrer"
        >
          +92 305 6561268
        </a>
      </div>
    </div>
  )
}
