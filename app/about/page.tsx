"use client"

import Avatar from '@/components/Avatar'
import Circles from '@/components/Circles'
import React, { useState } from 'react'
import { FaReact, FaUnity } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/variant'
import CountUp from 'react-countup'

type SkillInfo = {
    title: string;
    icons: React.ReactNode[];
};

type ExperienceInfo = {
    title: string;
    company: string;
    stage: string;
};

type AboutItem = {
    title: string;
    info: (SkillInfo | ExperienceInfo)[];
};

const aboutData: AboutItem[] = [
    {
        title: 'Skills',
        info: [
            {
                title: 'Web Developer',
                icons: [
                    <FaReact/>,
                    <SiNextdotjs/>
                ],
            },
            {
                title: 'Game Developer',
                icons: [
                    <FaUnity/>
                ]
            }
        ]
    },
    {
        title: "Experience",
        info: [
            {
                title: "Software Engineer",
                company: 'MTA NYCT',
                stage: 'Sep 2023 - Present',
            },
        ]
    }
]

const AboutPage = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
            <Circles/>

            <motion.div className="hidden xl:flex absolute bottom-0 -left-[370px]" variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden">
                <Avatar/>
            </motion.div>

            <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
                <div className="flex-1 flex flex-col justify-center">
                    <motion.h2 className='h2' variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden">
                        Captivating <span className='text-accent'>stories</span> birth magnitifcent designs
                    </motion.h2>

                    <motion.p className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0' variants={fadeIn('right', 0.4)} initial="hidden" animate="show" exit="hidden">
                        4 years ago, I started my college journey as a Computer Science major. Since then, I've built my skills by building many projects in web development, 
                        machine learning, game development, etc. Now I'm working as a Software Engineer for a major company in New York City
                    </motion.p>

                    <motion.div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8" variants={fadeIn('right', 0.6)} initial="hidden" animate="show" exit="hidden">
                        <div className="flex flex-1 xl:gap-x-6">
                            {/* Years of Experince */}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text=2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={2} duration={5}/>+
                                </div>

                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of Experience</div>
                            </div>

                            {/* Projects Completed */}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text=2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={5} duration={5}/>+
                                </div>

                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Projects Completed</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div className="flex flex-col w-full xl:max-w-[48%] h-[480px]" variants={fadeIn('left', 0.4)} initial="hidden" animate="show" exit="hidden">
                    <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                        {aboutData.map((item, idx) => {
                            return(
                                <button 
                                    key={idx} 
                                    className={`${index === idx && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                    onClick={() => setIndex(idx)}
                                >
                                    {item.title}
                                </button>
                            )
                        })}
                    </div>

                    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-4 items-center xl:items-start">
                        {aboutData[index].info.map((item, idx) => {
                            return 'icons' in item ? (
                                <div key={idx} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                                
                                    <div className="flex gap-x-4">
                                        {item.icons?.map((icon, idx) => {
                                            return(
                                                <div key={idx} className="text-2xl text-white">{icon}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                            ) : (
                                <div key={idx} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                                    <div className="">{item.company}:</div>
                                    <div>{item.stage}</div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutPage
