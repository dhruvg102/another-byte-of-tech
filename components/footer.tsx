

export default function Footer() {
  return (
    <footer className="mb-10">
      <hr className="h-[0.2rem] my-8 bg-black" />

      <div className="flex justify-between gap-x-40">
        <div className="flex flex-col w-[25%]">
          <span>Minneapolis Institute of Art</span>
          <span className=" text-balance">
            2400 Third Avenue South Minneapolis, Minnesota 55404 888 642 2787
            (Toll Free) visit@artsmia.org
          </span>
        </div>

        <p className="w-[45%] ">
          <span className="font-semibold">About this website:</span> built with
          React & Next.js (App Router & Server Actions), TypeScript, Tailwind
          CSS, Framer Motion, React Email & Resend, Vercel hosting.
        </p>
      </div>
    </footer>
  );
}

//  {/* Website Heading */}
//  <h1 className="text-3xl font-black mt-12">Another Byte Of Tech</h1>
