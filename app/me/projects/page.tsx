import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/projects";
import ProjectHolder from "@/components/project/projectHolder";

export default function Page() {
  console.log(projects, " is projects...");

  return (
    <main className=" flex justify-start flex-col items-center w-full h-[100vh] overflow-auto">
      {/* Yoke play */}
      {projects.map((project, index) => (
        <ProjectHolder project={project} key={index} />
      ))}
    </main>
  );
}
