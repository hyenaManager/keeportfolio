"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AsideNavbar() {
  const pathName = usePathname();

  return (
    <aside className="w-[20vw] h-[100vh] p-2 hidden md:block overflow-auto  relative">
      <span className=" w-[10px] h-[40%] lg:h-[50%] bg-[#732020] absolute top-7 z-[-1] left-[30%]"></span>
      <header className=" flex justify-center items-center gap-1">
        <Link href={"/"}>
          <Image
            src={"/profile.png"}
            width={100}
            height={100}
            alt="proifle"
            className=" rounded-full p-2 bg-[#732020] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px]"
          />
        </Link>
        <h3 className="md:text-xl lg:text-4xl text-white">KEE</h3>
      </header>
      <ul className=" w-fit mt-2 justify-center items-center flex flex-col gap-4 ">
        <Link
          className={clsx(
            "bg-[#204959] border-4 border-[#732020] p-3 flex items-center justify-between gap-2 hover:text-red-500 md:text-sm lg:text-lg font-bold rounded-lg w-full ",
            {
              " md:text-lg lg:text-2xl text-white bg-[#732020] hover:text-white":
                pathName === "/me",
            }
          )}
          href={"/me"}
        >
          <Image
            src={"/contact.svg"}
            width={100}
            height={100}
            alt="proifle"
            className="  bg-white w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]"
          />
          <h4 className=" text-sm lg:text-xl font-bold">ABOUT ME</h4>
        </Link>
        {/* <Link
          className={clsx(
            "bg-[#204959] border-4 border-[#732020] p-3 flex items-center justify-between gap-2 hover:text-red-500 md:text-sm lg:text-lg font-bold rounded-lg w-full ",
            {
              " md:text-lg lg:text-2xl text-white bg-[#732020] hover:text-white": pathName === "/me/education",
            }
          )}
          href={"/me/education"}
        >
          <Image
            src={"/education.svg"}
            width={100}
            height={100}
            alt="proifle"
            className="  bg-white w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]"
          />
          <h4>education</h4>
        </Link> */}
        <Link
          className={clsx(
            " uppercase bg-[#204959] border-4 border-[#732020] p-3 flex items-center justify-between gap-2 hover:text-red-500 md:text-sm lg:text-lg font-bold rounded-lg w-full ",
            {
              " md:text-lg lg:text-2xl text-white bg-[#732020] hover:text-white":
                pathName === "/me/projects",
            }
          )}
          href={"/me/projects"}
        >
          <Image
            src={"/project.svg"}
            width={100}
            height={100}
            alt="proifle"
            className="  bg-white w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]"
          />
          <h4 className=" text-[11px] lg:text-xl">projects</h4>
        </Link>
        <Link
          className={clsx(
            " uppercase bg-[#204959] border-4 border-[#732020] p-3 flex items-center justify-between gap-2 hover:text-red-500 md:text-sm lg:text-lg font-bold rounded-lg w-full ",
            {
              " md:text-lg lg:text-2xl text-white bg-[#732020] hover:text-white":
                pathName === "/me/skills",
            }
          )}
          href={"/me/skills"}
        >
          <Image
            src={"/skill.svg"}
            width={100}
            height={100}
            alt="proifle"
            className="  bg-white w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]"
          />
          <h4 className=" text-[11px] lg:text-xl">skills</h4>
        </Link>
      </ul>
    </aside>
  );
}
