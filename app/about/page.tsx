import React from 'react'
import { FaReact, FaUnity } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

const aboutData = [
    {
        title: 'Skills',
        info: [
            {
                title: 'Software Engineer',
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
                title: "Software Engineer - MTA NYCT",
                stage: 'Sep 2023 - Present',
            },
        ]
    }
]

const AboutPage = () => {
  return (
    <div className="">
      About
    </div>
  )
}

export default AboutPage
