import { static_links, collapsable_links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-[999] mt-[4rem] w-full mb-3">
      <nav className="flex items-end justify-between flex-wrap ">
        <Link href={"/"}>
          <h1 className="text-6xl tracking-tighter font-black text-nowrap ">
            Another Byte Of Tech
          </h1>
        </Link>
        {/* CHANGE GAP IF NUMBER OF LINKS CHANGE */}
        <ul className="flex gap-[3.5rem] flex-nowrap">
          {/*Nav Items */}
          {static_links.map((link) => (
            <li key={link.hash} className="">
              <Link
                className={`font-black hover:underline transition-all`}
                href={link.hash}
              >
                {link.name}
              </Link>
            </li>
          ))}
          {collapsable_links.map((link) => (
            <li key={link.hash} className="">
              <Link
                className={`font-extralight hover:underline transition-all`}
                href={link.hash}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

//  {/* Website Heading */}
//  <h1 className="text-3xl font-black mt-12">Another Byte Of Tech</h1>
