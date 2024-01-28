import Image from "next/image";
import Link from "next/link";

type ProjectHolder = {
  description: string;
  name: string;
  gitRepo: string;
  link: string;
  image: string;
};

export default function ProjectHolder({ project }: { project: ProjectHolder }) {
  return (
    <section className=" flex flex-row justify-center items-center p-4 w-full">
      <Link
        href={project.link}
        target="blank"
        className=" w-[350px] h-[40vh] flex justify-center items-center rounded-lg "
      >
        <Image
          src={project.image}
          alt="project"
          width={200}
          height={200}
          className=" w-[200px] h-[200px] "
        />
      </Link>
      <article className=" flex flex-col w-[40vw] h-[40vh] justify-start items-start rounded-r-3xl bg-slate-900 p-3 gap-3 text-white">
        <h2 className=" text-2xl uppercase text-slate-100 font-bold">
          {project.name}
        </h2>
        <Link
          className=" text-lg italic text-blue-600 flex justify-start items-center gap-2"
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
        <p className="text-xl">{project.description}</p>
      </article>
    </section>
  );
}
