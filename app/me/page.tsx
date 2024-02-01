import ImageCard from "@/components/card/imageCard";
import Experiences from "@/components/me/experience";
import PersonalInformation from "@/components/me/personalInformation";
import Link from "next/link";

export default function Page() {
  return (
    <main className="w-full text-white h-full text-2xl flex flex-col justify-start gap-2 items-center">
      <Experiences />
      <PersonalInformation />
      {/* <section className="w-full flex justify-start p-3 items-start flex-col">
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
          <Link target="blank" href={"https://github.com/sui-kee"} className="">
            <ImageCard
              className="w-[70px] h-[70px]"
              imageData={{ image: "/github.svg", name: "Github" }}
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
        </ul>
      </section> */}
    </main>
  );
}
