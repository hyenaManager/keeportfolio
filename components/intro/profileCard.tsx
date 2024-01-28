"use client";
import { useAnimation, motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ProfileCard() {
  const textAnimate = useAnimation();
  const profileRef = useRef(null);
  const isInView = useInView(profileRef);

  useEffect(() => {
    if (isInView) {
      textAnimate.start({ x: 0, opacity: 1 });
    } else {
      textAnimate.start({ x: 200, opacity: 0.2 });
    }
  }, [isInView]);

  return (
    <motion.section
      ref={profileRef}
      className=" flex justify-center items-center w-[90%] sm:w-[70%] h-fit gap-4 p-3 flex-col"
    >
      <h2 className=" text-lg sm:text-xl lg:text-4xl uppercase text-white font-bold max-w-[70vw]">
        Hello, I'm Ling Kee and welcome to my portfolio website
      </h2>
      <article className=" flex flex-col lg:flex-row mt-7 justify-center gap-2 p-5 md:p-12 rounded-xl md:rounded-2xl lg:rounded-full bg-green-400 items-center max-w-[70vw] ">
        <Image
          width={400}
          height={400}
          alt="profile"
          src={"/profile.png"}
          className=" rounded-full w-[170px] h-[170px] sm:w-[270px] sm:h-[270px] lg:w-[300px] lg:h-[300px] p-2 lg:p-4 bg-white"
        />
        <motion.p
          initial={{ x: 200, opacity: 0.2 }}
          animate={textAnimate}
          transition={{ duration: 1.9, type: "spring" }}
          className="text-white text-sm sm:text-xl lg:text-2xl"
        >
          I am a passionate and self-motivated developer with experience in
          various technologies. I am a dedicated learner in the field of web
          development and programming and always feel free to learn new features
          and new languages. I am eager to continue expanding my knowledge and
          skills in the ever-evolving world of web development. I am open to new
          opportunities and challenges in the industry.
        </motion.p>
      </article>
      <Link
        href={"me"}
        className=" px-5 py-2 w-fit rounded-lg text-white bg-pink-500 hover:bg-pink-700"
      >
        Inspect me
      </Link>
    </motion.section>
  );
}
