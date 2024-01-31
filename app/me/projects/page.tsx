import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/projects";
import ProjectHolder from "@/components/project/projectHolder";

export default function Page() {
  return (
    <main className=" flex justify-start flex-col items-center w-full md:h-[100vh] md:overflow-auto gap-4 p-3">
      {/* Yoke play */}
      {projects.map((project, index) => (
        <ProjectHolder project={project} key={index} index={index} />
      ))}
    </main>
  );
}
