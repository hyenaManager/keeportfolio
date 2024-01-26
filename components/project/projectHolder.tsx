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
        className=" w-[350px] flex justify-center items-center rounded-lg "
      >
        <Image
          src={project.image}
          alt="project"
          width={200}
          height={200}
          className=" w-[200px] h-[200px] "
        />
      </Link>
      <article className=" flex flex-col w-[50vw] justify-start items-start p-3 gap-3 text-white">
        <h2 className=" text-2xl uppercase text-black font-bold">
          {" "}
          {project.name}{" "}
        </h2>
        <Link
          className=" text-2xl italic text-blue-600"
          href={project.gitRepo}
          target="blank"
        >
          Github repo
        </Link>
        <p className="text-xl">{project.description}</p>
      </article>
    </section>
  );
}
