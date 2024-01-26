"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AsideNavbar() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <aside className="w-[20vw] h-[100vh] p-2">
      <header className=" flex justify-center items-center gap-1">
        <Link href={"/"}>
          <Image
            src={"/profile.png"}
            width={100}
            height={100}
            alt="proifle"
            className=" rounded-full p-2 bg-white w-[100px] h-[100px]"
          />
        </Link>
        <h3 className="text-4xl text-white">KEE</h3>
      </header>
      <ul className=" w-full mt-2 justify-center items-center flex flex-col gap-4 ">
        <Link
          className={clsx(
            "bg-white p-3 flex items-center justify-between gap-2 hover:text-red-500 text-lg font-bold rounded-lg w-full ",
            {
              " text-2xl text-red-500": pathName === "/me",
            }
          )}
          href={"/me"}
        >
          <Image
            src={"/contact.svg"}
            width={100}
            height={100}
            alt="proifle"
            className="  bg-white w-[60px] h-[60px]"
          />
          <h4 className=" text-xl font-bold">ABOUT ME</h4>
        </Link>
        {/* <Link
          className={clsx(
            "bg-white p-3 flex items-center justify-between gap-2 hover:text-red-500 text-lg font-bold rounded-lg w-full ",
            {
              " text-2xl text-red-500": pathName === "/me/education",
            }
          )}
          href={"/me/education"}
        >
          <Image
            src={"/education.svg"}
            width={100}
            height={100}
            alt="proifle"
            className="  bg-white w-[60px] h-[60px]"
          />
          <h4>education</h4>
        </Link> */}
        <Link
          className={clsx(
            " uppercase bg-white p-3 flex items-center justify-between gap-2 hover:text-red-500 text-lg font-bold rounded-lg w-full ",
            {
              " text-2xl text-red-500": pathName === "/me/projects",
            }
          )}
          href={"/me/projects"}
        >
          <Image
            src={"/project.svg"}
            width={100}
            height={100}
            alt="proifle"
            className="  bg-white w-[60px] h-[60px]"
          />
          <h4>projects</h4>
        </Link>
        <Link
          className={clsx(
            " uppercase bg-white p-3 flex items-center justify-between gap-2 hover:text-red-500 text-lg font-bold rounded-lg w-full ",
            {
              " text-2xl text-red-500": pathName === "/me/skills",
            }
          )}
          href={"/me/skills"}
        >
          <Image
            src={"/skill.svg"}
            width={100}
            height={100}
            alt="proifle"
            className="  bg-white w-[60px] h-[60px]"
          />
          <h4>skills</h4>
        </Link>
      </ul>
    </aside>
  );
}
