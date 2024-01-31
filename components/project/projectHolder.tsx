import { bebas_neue, poor_story, yanone } from "@/app/font";
import Image from "next/image";
import Link from "next/link";

import yokeplay from "../../public/yokeplay.png";
import yokeplaysm from "../../public/yokeplaysm.jpg";
import gSong from "../../public/g-song.png";
import gSongsm from "../../public/g-songsm.jpg";
import jaja from "../../public/jajaliken.png";
import jajasm from "../../public/jajalikensm.jpg";

type ProjectHolder = {
  description: string;
  name: string;
  gitRepo: string;
  link: string;
  image: string;
  buildWith: string[];
  coverImage: any;
  coverImageSm: any;
};

export default function ProjectHolder({
  project,
  index,
}: {
  project: ProjectHolder;
  index: number;
}) {
  // project lis is for image optimization like placeholder="blur"
  const project_list = [
    {
      lg: yokeplay,
      sm: yokeplaysm,
    },
    {
      lg: gSong,
      sm: gSongsm,
    },
    {
      lg: jaja,
      sm: jajasm,
    },
  ];
  return (
    <section className=" flex flex-col justify-start bg-[#061D26] items-center p-4 w-full gap-3 rounded-md shadow-lg">
      <article className=" relative w-full min-h-[70vh] p-2 flex flex-col gap-2 justify-end items-center rounded-md ">
        <Image
          src={project_list[index].lg}
          alt="project"
          fill
          placeholder="blur"
          // width={700}
          // height={500}
          className=" w-full bg-top object-cover hidden sm:block"
        />
        <Image
          src={project_list[index].sm}
          alt="project"
          fill
          placeholder="blur" // width={700}
          // height={500}
          className=" w-full bg-top object-cover block sm:hidden"
        />
        <ul className=" w-full flex flex-row flex-wrap relative gap-2">
          {project.buildWith.map((name, index) => (
            <li
              key={index}
              className=" uppercase p-1 px-2 text-center text-[10px] md:text-sm bg-blue-600 text-white rounded-md"
            >
              {name}
            </li>
          ))}
        </ul>
      </article>
      <article
        className={` ${poor_story.className} flex flex-col w-[90vw] sm:w-[80vw] md:w-[70vw] h-full justify-start items-start rounded-md p-3 gap-3 text-[#A66D03]`}
      >
        <header
          className={` ${bebas_neue.className} flex justify-start items-center gap-2 text-4xl uppercase text-slate-100 font-bold`}
        >
          <Image
            src={project.image}
            alt="coverimage"
            width={100}
            height={100}
            className=" h-[50px] w-[50px]"
          />
          <h1>{project.name}</h1>
        </header>
        <Link
          className=" text-2xl italic text-blue-600 flex justify-start items-center gap-2"
          href={project.gitRepo}
          target="blank"
        >
          <Image
            src={"/github.svg"}
            width={100}
            height={100}
            alt="git"
            className=" w-[30px] h-[30px]"
          />
          <h2>github repo link</h2>
        </Link>
        <Link
          className=" text-2xl italic text-blue-600 flex justify-start items-center gap-2"
          href={project.link}
          target="blank"
        >
          <Image
            src={"/link.svg"}
            width={100}
            height={100}
            alt="git"
            className=" w-[30px] h-[30px]"
          />
          <h2>app link</h2>
        </Link>
        <p
          className={` ${yanone.className} text-lg md:text-4xl font-extrabold`}
        >
          {project.description}
        </p>
      </article>
    </section>
  );
}
