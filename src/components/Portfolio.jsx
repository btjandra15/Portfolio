import React from 'react'
import vocabHunterPNG from "../images/portfolioImages/vocab-hunter-icon.png"
import platformerIMG from "../images/portfolioImages/2dPlatformerIMG.png"

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            src: vocabHunterPNG,
            link: ""
        },
        {
            id: 2,
            src: platformerIMG,
            link: "https://github.com/btjandra15/2DPlatformerGame"
        }
    ]

  return (
    <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {projects.map(({id, src, link}) => {
                    return(
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 h-48"/>

                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                    <a href={link} target='_blank' rel='noreferrer'>
                                        Code
                                    </a>
                                </button>
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