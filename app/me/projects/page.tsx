import Image from "next/image";

export default function Page() {
  return (
    <main className="flex p-3 flex-col justify-center items-center  rounded-lg ">
      <article className="flex xsm:flex-col sm:flex-row justify-center sm:w-[80vw] min-h-[40vh]  rounded-lg">
        <section className=" relative min-w-[40vw] min-h-[35vh] max-h-[40vh]">
          <Image
            priority
            src={"/yokeplay.png"}
            fill
            sizes="(min-width: 340px) 30vw,(min-width:620px) 50vw"
            className=" object-cover bg-top rounded-l-lg"
            alt="band"
          />
        </section>
        <section className="flex flex-col justify-between p-2 relative items-end">
          <div className="flex flex-col justify-start">
            <h2 className="text-4xl z-20 font-bold">Yoke play</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              sequi id voluptatem ipsam temporibus eligendi soluta accusantium
              ullam tempora quas, et, numquam repellendus quidem? Nemo explicabo
              iure beatae quibusdam in.
            </p>
          </div>
          {/* <CustomLink href={"/createSong"}>Create Now</CustomLink> */}
        </section>
      </article>
    </main>
  );
}
