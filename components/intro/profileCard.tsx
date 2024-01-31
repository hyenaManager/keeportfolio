import { bebas_neue, yanone } from "@/app/font";
import Image from "next/image";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <section className=" flex justify-center items-center w-[90%] sm:w-[70%] h-fit gap-4 p-3 flex-col">
      <article className=" flex flex-col md:flex-row mt-2 justify-center gap-3 p-5 md:p-12 items-center w-[90vw] md:max-w-[70vw] ">
        <Image
          width={400}
          height={400}
          alt="profile"
          src={"/profile.png"}
          className=" w-[190px] h-[190px] sm:w-[280px] sm:h-[280px] lg:w-[330px] lg:h-[330px] rounded-md p-2 lg:p-4 "
        />
        <footer className=" flex justify-start flex-col">
          <h2
            className={` ${bebas_neue.className} text-lg sm:text-xl lg:text-4xl uppercase text-[#BFAEA8] font-bold max-w-[70vw]`}
          >
            Hello, I'm Ling Kee
          </h2>
          <p
            className={`${yanone.className} text-[#BFAEA8] text-lg sm:text-2xl lg:text-[30px]`}
          >
            I create innovative websites with cutting-edge features.I prioritize
            user-centric design to ensure a seamless and enjoyable experience.I
            develop dynamic and interactive websites that engage users and my
            websites are responsive, ensuring optimal viewing on various
            devices.
          </p>
          <div className=" flex justify-start gap-3">
            <Link
              href={"me"}
              className=" px-5 py-2 w-fit rounded-lg text-white bg-[#732020] hover:bg-pink-700"
            >
              Inspect me
            </Link>
            <Link
              href={"#"}
              className=" px-5 py-2 w-fit rounded-md text-white border-2 border-[#732020] hover:bg-[#732020]"
            >
              Hire me
            </Link>
          </div>
        </footer>
      </article>
    </section>
  );
}
