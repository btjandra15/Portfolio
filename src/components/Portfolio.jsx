import React, { useEffect, useRef, useState } from 'react'
import vocabHunterPNG from "../images/portfolioImages/vocab-hunter-icon.png"
import platformerPNG from "../images/portfolioImages/2dPlatformerIMG.png"
import portfolioWebsitePNG from "../images/portfolioImages/portfolioWebsite.png"
import CloseIcon from '@mui/icons-material/Close';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            name: "Vocab Hunter Website",
            src: vocabHunterPNG,
            link: ""
        },
        {
            id: 2,
            name: "2d Platformer Game",
            src: platformerPNG,
            link: "https://github.com/btjandra15/2DPlatformerGame"
        },
        {
            id: 3,
            name: "Portfolio Website",
            src: portfolioWebsitePNG
        }
    ]

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageSrc, setCurrentImageSrc] = useState(false);
    const bubbleRef = useRef(null);
    
    const handleClick = (src) => {
        if(selectedImage === src){
            setSelectedImage(null);
        }else{
            setSelectedImage(src);
        }
    };

    const handleClickOutside = (event) => {
        if(bubbleRef.current && !bubbleRef.current.contains(event.target)){
            setSelectedImage(null);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [selectedImage])

    return (
        <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {projects.map(({id, name, src, link}) => {
                        const isImageSelected = selectedImage === src;

                        return(
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <h1 className='text-3xl flex items-center justify-center'>{name}</h1>
                                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 h-48 w-80 object-cover cursor-pointer" onClick={() => handleClick(src)}/>

                                <div className='flex items-center justify-center'>
                                    {isImageSelected && (
                                        <div className="floating-bubble absolute bg-gradient-to-b from-black to-gray-800">
                                            <CloseIcon className="absolute top-2 right-2 cursor-pointer text-white" onClick={() => handleClick(src)}/>

                                            <div className=' text-white p-4 rounded-md flex items-center justify-center sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0r'>
                                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                                    
                                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                                    <a href={link} target='_blank' rel='noreferrer'>
                                                        Code
                                                    </a>
                                                </button> 
                                            </div>
                                        </div>
                                    )}

                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' onClick={() => handleClick(src)}>View Details</button>
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