"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AsideNavbar() {
  const pathName = usePathname();

  return (
    <aside className="w-[20vw] h-[100vh] p-2 hidden md:block overflow-auto ">
      <header className=" flex justify-center items-center gap-1">
        <Link href={"/"}>
          <Image
            src={"/profile.png"}
            width={100}
            height={100}
            alt="proifle"
            className=" rounded-full p-2 bg-white md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px]"
          />
        </Link>
        <h3 className="md:text-xl lg:text-4xl text-white">KEE</h3>
      </header>
      <ul className=" w-fit mt-2 justify-center items-center flex flex-col gap-4 ">
        <Link
          className={clsx(
            "bg-white p-3 flex items-center justify-between gap-2 hover:text-red-500 md:text-sm lg:text-lg font-bold rounded-lg w-full ",
            {
              " md:text-lg lg:text-2xl text-red-500": pathName === "/me",
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
            "bg-white p-3 flex items-center justify-between gap-2 hover:text-red-500 md:text-sm lg:text-lg font-bold rounded-lg w-full ",
            {
              " md:text-lg lg:text-2xl text-red-500": pathName === "/me/education",
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
            " uppercase bg-white p-3 flex items-center justify-between gap-2 hover:text-red-500 md:text-sm lg:text-lg font-bold rounded-lg w-full ",
            {
              " md:text-lg lg:text-2xl text-red-500":
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
            " uppercase bg-white p-3 flex items-center justify-between gap-2 hover:text-red-500 md:text-sm lg:text-lg font-bold rounded-lg w-full ",
            {
              " md:text-lg lg:text-2xl text-red-500": pathName === "/me/skills",
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
