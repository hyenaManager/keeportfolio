import clsx from "clsx";
import Image from "next/image";

export default function ImageCard({
  imageData,
  className = "",
  mainClassName = "",
}: {
  imageData: any;
  mainClassName?: string;
  className?: string;
}) {
  return (
    <article
      className={clsx(
        " flex flex-col justify-center items-center gap-3 p-2 rounded-md  ",
        {
          [mainClassName]: mainClassName,
        }
      )}
    >
      <Image
        src={imageData.image}
        width={150}
        height={150}
        className={clsx("w-[100px] h-[100px]", {
          [className]: className,
        })}
        alt="image"
      />
      <h2 className="text-lg">{imageData.name}</h2>
    </article>
  );
}
