"use client";

import Photo from "@/components/HomePage/Photo";
import Social from "@/components/HomePage/Social";
import Stats from "@/components/HomePage/Stats";
import { Button } from "@/components/ui/button"
import { saveAs } from "file-saver";
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span> 

            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">Brandon Tjandra</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">I&apos;m proficient in various programming languages and interested in Machine Learning & Deep Learning</p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size='lg' className="uppercase flex items-center gap-2">
                <a href="/Resume.pdf" download alt="Download Resume" target="_blank">
                  <span>Download Resume</span> 
                </a>
              </Button>

              <div className="mb-8 xl:mb-0 ">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>

          <div className="">
            {/* <Photo/> */}
          </div>
        </div>
      </div>

      <Stats/>
    </section>
  )
}

export default Home;
