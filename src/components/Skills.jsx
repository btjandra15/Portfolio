import React from 'react'
import HTML from "../images/languages/html.png"
import CSS from "../images/languages/css.png"
import JS from "../images/languages/javascript.png"
import ReactImage from "../images/languages/react.png"
import PythonImage from "../images/languages/python.png"
import CPlusPlus from "../images/languages/c++.png"
import CSharp from "../images/languages/csharp.png"

const Skills = () => {
    const skills = [
        {
            id: 1,
            src: HTML,
            title: "HTML",
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: CSS,
            title: "CSS",
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: JS,
            title: "JavaScript",
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: ReactImage,
            title: "React",
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: PythonImage,
            title: "Python",
            style: 'shadow-yellow-300'
        },
        {
            id: 6,
            src: CPlusPlus,
            title: "C++",
            style: 'shadow-blue-500'
        },
        {
            id: 7,
            src: CSharp,
            title: "C#",
            style: 'shadow-purple-500'
        },
    ]

    return (
        <div name="Skills" className='bg-gradient-to-b from-black to-gray-800 w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                    <p className='py-6'>Languages & Software I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {skills.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills