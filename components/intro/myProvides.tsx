"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function MyProvides() {
  return (
    <section className=" flex justify-center items-center w-[90%] sm:w-[70%] gap-4 h-fit p-3 flex-col sm:flex-row flex-wrap">
      <h2 className=" sm:text-[50px] md:text-[80px] font-extrabold space-x-2 uppercase text-white">
        What you can expect from me
      </h2>
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
      animation.start({ opacity: [0.2, 0.3, 0.4, 0.6, 0.8, 0.9, 1] });
    } else {
      animation.start({ opacity: 0.1 });
    }
  }, [isInView]);
  return (
    <motion.article
      initial={{ opacity: 0.1 }}
      animate={animation}
      transition={{ duration: 4.8, type: "spring" }}
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
