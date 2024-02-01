import ImageCard from "@/components/card/imageCard";
import {
  JSlibraries,
  authentication,
  languages,
  others,
  styling,
} from "../lib/skills";
import { poppins } from "@/app/font";

export default function Page() {
  return (
    <main
      className={`${poppins.className} w-full text-white text-4xl  flex gap-3 md:h-[100vh] md:overflow-auto justify-start flex-col`}
    >
      <section className=" gap-2 w-full flex flex-col justify-center items-start p-2">
        <h3 className="text-3xl border-b-4 ">Languages</h3>
        <ul className=" w-full flex flex-row justify-start flex-warp gap-3 ">
          {languages.map((language) => (
            <li key={language.id}>
              <ImageCard imageData={language} />
            </li>
          ))}
        </ul>
      </section>
      <section className=" gap-2 w-full flex flex-col justify-center flex-wrap items-start p-2">
        <h3 className="text-3xl border-b-4 ">
          Javascript libraries/frameworks
        </h3>
        <ul className=" w-full flex flex-row justify-start flex-warp gap-3 flex-wrap ">
          {JSlibraries.map((data) => (
            <li key={data.id}>
              <ImageCard imageData={data} />
            </li>
          ))}
        </ul>
      </section>
      <section className=" gap-2 w-full flex flex-col justify-center flex-wrap items-start p-2">
        <h3 className="text-3xl border-b-4 ">Authentication</h3>
        <ul className=" w-full flex flex-row justify-start flex-warp gap-3 ">
          {authentication.map((data) => (
            <li key={data.id}>
              <ImageCard imageData={data} />
            </li>
          ))}
        </ul>
      </section>
      <section className=" gap-2 w-full flex flex-col justify-center flex-wrap items-start p-2">
        <h3 className="text-3xl border-b-4 ">Styling libraries</h3>
        <ul className=" w-full flex flex-row justify-start flex-warp gap-3 ">
          {styling.map((data) => (
            <li key={data.id}>
              <ImageCard imageData={data} />
            </li>
          ))}
        </ul>
      </section>
      <section className=" gap-2 w-full flex flex-col justify-center flex-wrap items-start p-2">
        <h3 className="text-3xl border-b-4 ">Other</h3>
        <ul className=" w-full flex flex-row justify-start flex-warp gap-3 ">
          {others.map((data) => (
            <li key={data.id}>
              <ImageCard imageData={data} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
