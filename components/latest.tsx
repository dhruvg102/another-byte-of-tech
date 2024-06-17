import MIAIMAGE from "@/public/MIA.jpg";
import Image from "next/image";
export default function Latest() {
  return (
    <section className="flex lg:flex-nowrap flex-wrap justify-between gap-x-3 text-2xl">
      <div className="group w-[250rem]  bg-red-100">
        <Image
          src={MIAIMAGE}
          alt="MIA Art"
          className=" transition"
        />
        <span className="absolute text-white top-72 font-bold text-[7rem] max-w-[20rem] leading-[6.5rem] text-wrap group-hover:text-opacity-0 transition">Byte Of Tech</span>
      </div>
      <div className="flex flex-col gap-y-6">
        <span className="font-black text-5xl tracking-tight text-wrap">
          The Shape of Time: Korean Art after 1989
        </span>
        <span className="text-[1.7rem] font-black ">
          March 23, 2024 - June 23, 2024
        </span>
        <span className="font-extralight text-2xl text-wrap mt-2">
          The first generation of artists of Korean descent to experience the
          new freedoms and rapid changes ushered in by democracy reflect on
          social and political tensions, economic and cultural shifts, and
          illuminate the ironies of globalization.
        </span>
        <span className="font-thin text-[1.1rem] underline font">
          Learn More
        </span>
      </div>
    </section>
  );
}
