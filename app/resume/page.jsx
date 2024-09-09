"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const Resume = () => {
  const about = {
    title: 'About me',
    description: "I'm currently a 5th year student at The City College of New York majoring in Computer Science planning to graduate in June 2025",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Brandon Tjandra"
      },
      {
        fieldName: "Phone",
        fieldValue: "(917)-635-8719"
      },
      {
        fieldName: "Email",
        fieldValue: "btjandra15@gmail.com"
      },
      {
        fieldName: "Experience",
        fieldValue: "1 year"
      },
    ]
  }

  const experience = {
    icon: ''
  }

  return (
    <div>
      Resume Page
    </div>
  )
}

export default Resume
