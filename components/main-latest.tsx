import Image from "next/image";
import { main_page_blog } from "@/lib/data";
export default function MainLatest() {
  return (
    <>
      <section className="flex lg:flex-nowrap flex-wrap gap-x-3 text-2xl">
        <div className=" group lg:w-[60%]">
          <Image src={main_page_blog.image} alt="MIA Art" className=" transition" />
          
          <div className=" h-72 hidden sm:block sm:absolute sm:inset-6 sm:top-[max(calc(5.2vw+15vh),9rem)] sm:text-white sm:font-bold sm:text-[6rem] sm:leading-[6rem] sm:max-w-[20rem]  sm:group-hover:text-opacity-0 sm:transition">
            Byte Of Tech
          </div>
        </div>
        
        <div className=" lg:w-[40%] flex flex-col gap-y-6">
          <span className="font-black text-5xl tracking-tight text-wrap">
            {main_page_blog.title}
          </span>
          <span className="text-[1.7rem] font-black ">
            {main_page_blog.byline}
          </span>
          <span className="font-extralight text-2xl text-wrap mt-2">
            {main_page_blog.content}
          </span>
          <span className="font-thin text-[1.1rem] underline font">
            Learn More
          </span>
        </div>
      </section>
    </>
  );
}
