import { poor_story } from "@/app/font";
import Image from "next/image";
import Link from "next/link";

type ProjectHolder = {
  description: string;
  name: string;
  gitRepo: string;
  link: string;
  image: string;
  buildWith: string[];
};

export default function ProjectHolder({ project }: { project: ProjectHolder }) {
  return (
    <section className=" flex flex-col sm:flex-row justify-start bg-[#D9B504] items-center p-4 w-full gap-3 rounded-md shadow-lg">
      <article className=" w-[350px] h-[40vh] flex flex-col gap-2 justify-center items-center rounded-md ">
        <Image
          src={project.image}
          alt="project"
          width={200}
          height={200}
          className=" w-[100px] h-[100px]  sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] "
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
        className={` ${poor_story.className} flex flex-col w-[90vw] sm:w-[80vw] md:w-[40vw] h-full justify-start items-start rounded-md p-3 gap-3 text-[#A66D03]`}
      >
        <h2 className=" text-4xl uppercase text-slate-100 font-bold">
          {project.name}
        </h2>
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
        <p className="text-lg md:text-4xl font-extrabold">
          {project.description}
        </p>
      </article>
    </section>
  );
}
