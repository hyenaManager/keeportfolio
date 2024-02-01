import { bebas_neue, lato, yanone } from "@/app/font";
import Image from "next/image";

export default function PersonalInformation() {
  return (
    <section className=" flex flex-col sm:flex-row justify-between w-full p-3 md:p-2">
      <article className=" flex justify-center flex-col w-full gap-3 items-start">
        <h2 className={` ${bebas_neue.className} text-4xl`}>
          Personal informations
        </h2>
        <ul className=" flex flex-col justify-start items-start gap-7 w-full ">
          <li
            className={` ${yanone.className} flex flex-row  text-lg md:text-xl gap-2 items-center justify-start w-full`}
          >
            <Image
              src={"/green-person.svg"}
              width={50}
              height={50}
              alt="developer"
              className=" h-[30px] md:h-[40px] "
            />
            <h3 className={` ${lato.className} w-fit`}> 23 years old</h3>
          </li>
          <li
            className={` ${yanone.className} flex flex-row  text-lg md:text-xl gap-2 items-center justify-start w-full`}
          >
            <Image
              src={"/location.svg"}
              width={50}
              height={50}
              alt="developer"
              className=" h-[30px] md:h-[40px] "
            />
            <h3 className={` ${lato.className} w-fit`}>
              Myanmar,Yangon,Mayangone
            </h3>
          </li>
          <li
            className={` ${yanone.className} flex flex-row  text-lg md:text-xl gap-2 items-center justify-start w-full`}
          >
            <Image
              src={"/gmailred.svg"}
              width={50}
              height={50}
              alt="developer"
              className=" h-[30px] md:h-[40px] "
            />
            <h3 className={` ${lato.className} w-fit`}>mesutkee@gmail.com</h3>
          </li>
          <li
            className={` ${yanone.className} flex flex-row  text-lg md:text-xl gap-2 items-center justify-start w-full`}
          >
            <Image
              src={"/fb-profile.jpg"}
              width={50}
              height={50}
              alt="developer"
              className=" h-[30px] w-[30px] md:h-[44px] md:w-[44px] rounded-full "
            />
            <h3 className={` ${lato.className} w-fit`}>
              Ling Kee(Salai Ling Kee)
            </h3>
          </li>
        </ul>
      </article>
    </section>
  );
}
