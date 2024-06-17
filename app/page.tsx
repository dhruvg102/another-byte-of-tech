
import Latest from "@/components/latest";
import Recents from "@/components/recents";
export default function Home() {
  return (
    <>
      {/* Image Of Latest Blog +  Latest Blog Snippet*/}
      <Latest/>

      {/* Sign Up */}
      <section className="bg-gray-200 my-5 py-4 px-2 flex items-end gap-1 rounded-sm">
        <span className="font-black text-xl">Stay Informed.</span>
        <span className="font-thin underline text-xl ">Sign Up</span>
        <span className="font-thin text-xl">
          {" "}
          to recieve bimonthly emails from us.
        </span>
      </section>

      {/* Blog 1 + Blog 2 + Blog 3 */}
      <Recents/>
    </>
  );
}

