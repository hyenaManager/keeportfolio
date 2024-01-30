"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function MyProvides() {
  const textRef = useRef(null);
  const textAnimation = useAnimation();
  const isInView = useInView(textRef);
  const texts = "What you can expect from me".split(" ");
  useEffect(() => {
    if (isInView) {
      textAnimation.start({ opacity: 1, x: 0 });
    } else {
      textAnimation.start({ opacity: 0, x: 700 });
    }
  }, [isInView]);
  return (
    <section className=" flex justify-start items-center w-[90%] sm:w-[80%] gap-4 h-fit p-3 flex-col sm:flex-row flex-wrap">
      <motion.div
        ref={textRef}
        className="w-full gap-4 flex justify-start items-center flex-wrap"
      >
        {texts.map((text, index) => (
          <motion.h2
            key={index}
            initial={{ opacity: 0, x: 700 }}
            animate={textAnimation}
            transition={{ duration: 2, delay: index / 7 }}
            className=" text-[40px] sm:text-[50px] md:text-[80px] font-extrabold space-x-2 uppercase text-[#BFAEA8]"
          >
            {text}
          </motion.h2>
        ))}
      </motion.div>
      {[1, 2, 3, 4].map((num) => (
        <Provide key={num} />
      ))}
    </section>
  );
}

const Provide = () => {
  const ref = useRef(null);
  const animation = useAnimation();
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      animation.start({ scale: [0.2, 0.3, 0.4, 0.6, 0.8, 0.9, 1] });
    } else {
      animation.start({ scale: 0.1 });
    }
  }, [isInView]);
  return (
    <motion.article
      initial={{ scale: 0.1 }}
      animate={animation}
      transition={{ duration: 3, type: "spring" }}
      ref={ref}
      className=" flex justify-start flex-col w-[250px] sm:w-[300px] p-3 items-center rounded-tl-3xl rounded-br-3xl bg-slate-200"
    >
      <Image
        src={"/react-icon.svg"}
        width={180}
        height={180}
        alt="provides"
        className=" w-[150px] h-[150px]"
      />
      <h3 className="text-black text-sm sm:text-lg lg:text-2xl">UI/UX</h3>
    </motion.article>
  );
};
