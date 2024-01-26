import ImageCard from "@/components/card/imageCard";
import Link from "next/link";

export default function Page() {
  return (
    <main className="w-full text-white text-2xl flex flex-col justify-start gap-2 items-center">
      <section className="w-full flex justify-start p-3 items-start flex-col">
        <h2 className=" text-4xl text-blue-600 font-extrabold uppercase">
          Education
        </h2>
        <p>
          Self motivated ,self learner not from Computer Science Universities.
        </p>
      </section>
      <section className="w-full flex justify-start p-3 items-start flex-col">
        <h2 className=" text-4xl text-blue-600 font-extrabold uppercase">
          Experiences
        </h2>
        <ul>
          <li>- work as freelancer (front-end developer) since 2023</li>
          <li>- participated some hackathon events</li>
        </ul>
      </section>
      <section className="w-full flex justify-start p-3 items-start flex-col">
        <h2 className=" text-4xl text-blue-600 font-extrabold uppercase">
          Contact me
        </h2>
        <ul className=" w-full flex justify-start items-center flex-wrap gap-3 ">
          <Link target="blank" href={"https://t.me/HyenaKee"} className="">
            <ImageCard
              imageData={{ image: "/telegram.svg", name: "Telegram" }}
              className="w-[70px] h-[70px]"
            />
          </Link>
          <Link
            target="blank"
            href={
              "https://www.facebook.com/profile.php?id=100089539521655&mibextid=ZbWKwL"
            }
            className=""
          >
            <ImageCard
              className="w-[70px] h-[70px]"
              imageData={{ image: "/facebook.svg", name: "Facebook" }}
            />
          </Link>
          <li className="">
            <ImageCard
              className="w-[70px] h-[70px]"
              imageData={{ image: "/viber.svg", name: "+959425446715" }}
            />
          </li>
          <li className="">
            <ImageCard
              className="w-[70px] h-[70px]"
              imageData={{ image: "/gmail.svg", name: "mesutkee@gmail.com" }}
            />
          </li>
        </ul>
      </section>
    </main>
  );
}
