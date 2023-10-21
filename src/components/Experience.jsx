import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import { FaSchool, FaLaptop } from 'react-icons/fa';

const Experience = () => {
  return (
    <div name="Experience" className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div className='pb-8'>
                <p className='text4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
            </div>

            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement className='' date='Sep 2016 - Jun 2020' iconStyle={{background: "#3e497a", color: "#fff"}} icon={<FaSchool/>}>
                    <h3 className='text-black'>
                        Maspeth High School, Maspeth, NY
                    </h3>

                    <p className='text-black'>High School Diploma</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='' date='Aug 2020 - Present' iconStyle={{background: "#3e497a", color: "#fff"}} icon={<FaSchool/>}>
                    <h3 className='text-black'>
                        CUNY - City College, Manhattan, NY
                    </h3>

                    <p className='text-black'>Bachelor's of Science - Computer Science</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='' date='Sep 2023 - Present' iconStyle={{background: "#3e497a", color: "#fff"}} icon={<FaLaptop/>}>
                    <h3 className='text-black'>
                        MTA, Manhattan, NY
                    </h3>

                    <p className='text-black'>QA Analyst Intern</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </div>
  )
}

export default Experience