import React from "react";
import { contacts } from "@/app/me/lib/contacts";
import Image from "next/image";
import { bebas_neue } from "@/app/font";
import Link from "next/link";

export default function MyFooter() {
  return (
    <footer className=" min-h-fit bg-[#061D26] flex w-full flex-col gap-4 md:flex-row justify-start items-center p-3">
      <section className=" flex flex-col justify-start items-start gap-2">
        <h3
          className={` ${bebas_neue.className} text-4xl capitalize text-[#204959]`}
        >
          Social links
        </h3>
        {contacts.map((item, i) => (
          <Link
            key={i}
            target="blank"
            className=" flex justify-center gap-2 items-center"
            href={item.link}
          >
            <Image
              width={200}
              height={200}
              className=" w-[40px] h-[40px] "
              alt="image"
              src={item.image}
            />
            <h3 className=" text-sm text-white font-mono">{item.name}</h3>
          </Link>
        ))}
      </section>
    </footer>
  );
}
