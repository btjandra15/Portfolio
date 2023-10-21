import React, { useState } from 'react';
import portfolioWebsitePNG from "../images/portfolioImages/portfolioWebsite.png";
import CloseIcon from '@mui/icons-material/Close';
import Popup from "./Popup/Popup"

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            name: "Portfolio Website",
            src: portfolioWebsitePNG,
            githubLink: "https://github.com/btjandra15/Portfolio",
            toolsUsed: "Made with ReactJS & TailwindCSS"
        },
    ]

    const [projectPopups, setProjectPoups] = useState(projects.map(() => false));

    const openPopup = (projectId) => {
        const newPopups = [...projectPopups];
        newPopups[projectId - 1] = true;

        setProjectPoups(newPopups);
    }

    const closePopup = (projectId) => {
        const newPopups = [...projectPopups];
        newPopups[projectId - 1] = false;

        setProjectPoups(newPopups);
    }

    return (
        <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {projects.map(({id, name, src, githubLink, toolsUsed}) => {
                        return(
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <h1 className='text-3xl flex items-center justify-center'>{name}</h1>
                                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 h-48 w-80 object-cover cursor-pointer" onClick={() => openPopup(id)}/>

                                <div className='flex items-center justify-center '>
                                    <Popup trigger={projectPopups[id - 1]}>
                                        <h1 className='flex items-center justify-center '>{name}</h1>

                                        <li className='flex items-center justify-center'>{toolsUsed}</li>

                                        <div className='p-4 rounded-md flex items-center justify-center sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0r'>
                                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                                
                                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                                <a href={githubLink} target='_blank' rel='noreferrer'>
                                                    Code
                                                </a>
                                            </button> 
                                        </div>

                                        <CloseIcon className="absolute top-2 right-2 cursor-pointer text-black" onClick={() => closePopup(id)}/>
                                    </Popup>
                                        
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' onClick={() => openPopup(id)}>View Details</button>
                                </div>
                            </div>
                        )
                    })} 
                </div>
            
            </div>
        </div>
    )
}

export default Portfolio