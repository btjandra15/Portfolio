import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#0a001b] text-white h-screen">
      <Nav />

      <div className="flex justify-between items-center h-full px-48">
        <div className="max-w-2xl">
          <h1 className="text-8xl font-light">Welcome.</h1>
          <p className="text-lg mt-4">
            Ny name is Brandon Tjandra, majoring at Computer Science at The City College of New York. I am also Software Developer Intern at the MTA NYCT. I have worked on multiple projects using NextJS & Supabase, ranging from a social media website
            to a complex application using a spatial mapping software like ArcGIS
          </p>
        </div>

        <div>
          <Image 
            src="/hero_setup.avif" 
            alt="Laptop setup with coding" 
            width={500} 
            height={500} 
            className="rounded-lg"
          />
        </div>
      </div>

      {/* <div className="flex justify-center text-black">
        <div className="">
          <h1 className="text-4xl font-light mb-5">Experience</h1>
        </div>
      </div> */}
    </div>
  );
}
