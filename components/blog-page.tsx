/* eslint-disable react/no-unescaped-entities */
import BLOGLATEST from "@/public/bloglatest.jpg";
import Image from "next/image";
// import { blog1 } from "@/lib/data";
import type { blog } from "@/lib/data";

export default function BlogPage({blog}: {blog:blog}) {
  return (
    <section className="flex justify-center items-start">

      <div className="w-[25%]">
        <div >
          <ul className="flex w-full flex-wrap text-xs gap-x-2 p-0 m-0">
            {blog.tags.map((tag: string) => (
              <li key={tag} className="font-thin text-justify underline underline-offset-3">
                #{tag}
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      <div className="w-[75%]">
        <div className="flex  items-center gap-x-7">
          <Image src={blog.image} alt="Latest Blog" width={550} />
          <div className="flex flex-col gap-y-6">
            <h1 className="font-black text-5xl tracking-tight text-wrap">
              {blog.title}
            </h1>
            <span className="text-[1.7rem] font-bold ">
              {blog.byline}
            </span>
          </div>
        </div>
        <div>
          <p className="my-2 text-xl font-light">
            Two photographs by self-described visual activist Zanele Muholi,
            taken in 2011 in Cape Town, South Africa, are now on view in Mia's
            lobby.
          </p>
          <p className="my-4 text-xl font-light">
            The artist, whose use of they/them pronouns is intentionally
            pluralistic to acknowledge their ancestors, began this series of
            portraits in 2006, centered on the lives of Black trans and queer
            people in Africa. And they're still at it, the project becoming a
            kind of quest “to rewrite a Black queer and trans visual history of
            South Africa,” Muholi says, “for the world to know of our resistance
            and existence.” This determination is memorably reflected in the
            directness of each sitter's gaze, the poise and self-confidence with
            which they have composed themselves for the camera.
          </p>
          <p className="my-2 text-xl font-light">
            You can read more about Muholi's work in this recent interview and
            hear them describe it in this video from a 2020 mid-career survey at
            the Tate in London.
          </p>
        </div>
      </div>
    </section>
  );
}
