import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
                I started getting into computers all the way back in my freshmen year of High School. I was always interested in building a computer and how a computer actually works. My programming journey started as early as my sophomore year of High 
                School where I tried out different things. Ever since then, I've worked with many different languages such as C#, C++, Python, and many more. I've also used a lot of different software such as Visual Studio, Visual Studio Code, Unity, etc.
            </p>
        </div>
    </div>
  )
}

export default About