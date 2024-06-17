import Image from "next/image";
import BLOG1 from "@/public/blog1.jpg";
import BLOG2 from "@/public/blog2.jpg";
import BLOG3 from "@/public/blog3.jpg";

export default function Recents() {
  return (
    <section className=" flex justify-between gap-x-4">
      <div className="flex  flex-col w-[33%]">
        <Image
          src={BLOG1}
          alt="MIA Art"
          width={400}
          height={400}
          className="hover:scale-[1.03] transition"
        />
        <span className="text-2xl font-black mt-2">Domestic Idols</span>
        <span className="text-[1rem] font-light -mt-2">
          A colossal puppy, an abandoned tricycle, an unnaturally manicured
          lawn: are these the markers of a suburban idyll—or signs of something
          more complicated, even subversive? Explore this free exhibition in the
          Bell Family Decorative Arts Court until September 29.
        </span>
      </div>
      <div className="flex  flex-col w-[33%]">
        <Image
          src={BLOG2}
          alt="MIA Art"
          width={400}
          height={350}
          className="hover:scale-[1.03] transition"
        />
        <span className="text-2xl font-black mt-2">Become a Mia Member</span>
        <span className="text-[1rem] font-light -mt-2">
          Contributions from members provide essential support to Mia and a year
          of valuable benefits to you! Join Mia or renew your membership today.
        </span>
      </div>
      <div className="flex  flex-col w-[33%]">
        <Image
          src={BLOG3}
          alt="MIA Art"
          width={400}
          height={350}
          className="hover:scale-[1.03] transition"
        />
        <span className="text-2xl font-black mt-2">
          Meet at Mia: Summer Series
        </span>
        <span className="text-[1rem] font-light -mt-2">
          Get to know us, and each other, at a new series of free Thursday
          evening events for adults—featuring live music, art making, special
          programs, and unique food and drink.
        </span>
      </div>
    </section>
  );
}
