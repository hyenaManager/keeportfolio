"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function SmSideBar() {
  const pathName = usePathname();
  const [showLinks, setShowLinks] = useState(false);
  if (!showLinks) {
    return (
      <button
        onClick={() => setShowLinks(!showLinks)}
        className=" top-2 left-2 sticky w-fit block md:hidden h-fit z-10 rounded-md bg-yellow-700 "
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className=" h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#f5eaea"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </button>
    );
  }

  return (
    <div
      className={clsx(
        " overflow-auto fixed top-0 left-0 w-full z-40 h-full flex flex-col justify-start items-start  md:hidden ",
        {
          "bg-[rgba(255,255,255,0.5)]": showLinks,
        }
      )}
    >
      {showLinks && (
        <aside className="w-[30vw] h-[100%] p-2">
          <header className=" flex justify-center items-center gap-1">
            <Link href={"/"}>
              <Image
                src={"/profile.png"}
                width={100}
                height={100}
                alt="proifle"
                className=" rounded-full p-2 bg-[#204959] w-[50px] h-[50px]"
              />
            </Link>
            <h3 className="text-xl text-white">KEE</h3>
          </header>
          <ul className=" w-[30vw] mt-2 justify-center items-center flex flex-col gap-4 ">
            <Link
              onClick={(e) => {
                e.stopPropagation();
                setShowLinks(!showLinks);
              }}
              className={clsx(
                "   bg-[#204959] p-3 flex items-center justify-between gap-2 hover:text-red-500 font-bold rounded-lg w-full ",
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
                className="  bg-[#204959] w-[20px] h-[20px]"
              />
              <h4 className=" text-[12px] font-bold">ABOUT ME</h4>
            </Link>
            <Link
              onClick={(e) => {
                e.stopPropagation();
                setShowLinks(!showLinks);
              }}
              className={clsx(
                "    uppercase bg-[#204959] p-3 flex items-center justify-between gap-2 hover:text-red-500 text-sm font-bold rounded-lg w-full ",
                {
                  "  text-red-500": pathName === "/me/projects",
                }
              )}
              href={"/me/projects"}
            >
              <Image
                src={"/project.svg"}
                width={100}
                height={100}
                alt="proifle"
                className="  bg-[#204959] w-[20px] h-[20px]"
              />
              <h4>projects</h4>
            </Link>
            <Link
              onClick={(e) => {
                e.stopPropagation();
                setShowLinks(!showLinks);
              }}
              className={clsx(
                "    uppercase bg-[#204959] p-3 flex items-center justify-between gap-2 hover:text-red-500 text-sm font-bold rounded-lg w-full ",
                {
                  "  text-red-500": pathName === "/me/skills",
                }
              )}
              href={"/me/skills"}
            >
              <Image
                src={"/skill.svg"}
                width={100}
                height={100}
                alt="proifle"
                className="  bg-[#204959] w-[20px] h-[20px]"
              />
              <h4>skills</h4>
            </Link>
          </ul>
        </aside>
      )}
    </div>
  );
}
