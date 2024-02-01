import Image from "next/image";
import developer from "../../public/free-devloper.png";
import { bebas_neue, yanone } from "@/app/font";
export default function Experiences() {
  return (
    <section className=" flex flex-col sm:flex-row justify-between w-full p-3 md:p-0">
      <Image
        src={developer}
        placeholder="blur"
        width={500}
        height={500}
        alt="developer"
        className=" h-[300px] md:h-[400px]"
      />
      <article className=" flex justify-center flex-col w-full gap-3 items-start">
        <h2 className={` ${bebas_neue.className} text-4xl`}>Expriences</h2>
        <ul className=" flex flex-col justify-start items-start gap-7">
          <li className={` ${yanone.className} text-xl md:text-3xl`}>
            work as freelancer since 2023
          </li>
          <li className={` ${yanone.className} text-xl md:text-3xl`}>
            participated serveral events
          </li>
          <li className={` ${yanone.className} text-xl md:text-3xl`}>
            developed serveral projects
          </li>
        </ul>
      </article>
    </section>
  );
}
