import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className=" flex justify-center items-center w-[100vw] h-[100vh] flex-col">
      <h2 className="text-4xl uppercase text-white font-bold max-w-[70vw]">
        Hello, I'm Ling Kee and welcome to my portfolio website
      </h2>
      <article className=" flex flex-row mt-7 justify-center gap-2 items-center max-w-[70vw] ">
        <Image
          width={400}
          height={400}
          alt="profile"
          src={"/profile.png"}
          className=" rounded-full w-[300px] h-[300px] p-4 bg-white"
        />
        <p className="text-white text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          consequatur blanditiis, officiis magnam quae corrupti asperiores
          perferendis quibusdam quo quia cupiditate quas, vel illo doloribus
          quidem molestias nobis maxime reiciendis! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit.
        </p>
      </article>
      <Link
        href={"me"}
        className=" px-5 py-2 w-fit rounded-lg text-white bg-pink-500 hover:bg-pink-700"
      >
        Inspect me
      </Link>
    </main>
  );
}
