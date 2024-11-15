"use client"

import React from 'react'
import { RxArrowTopRight, RxDesktop } from 'react-icons/rx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

const serviceData = [
    {
        icon: <RxDesktop/>,
        title: 'Web Development',
        description: "I provide web development services building responsive, high performance websites using modern technogolies like NextJS, Supabase, and Typescript"
    },
    {
        icon: <RxDesktop/>,
        title: 'Game Development',
        description: "I provide game development services helping pre existing games with any bug fixes, issues, new features, etc or building a whole new game from scratch using Unity and UE5"
    },
]

const ServiceSlider = () => {
  return (
    <Swiper 
        breakpoints={{320: {slidesPerView: 1, spaceBetween: 15}, 640: {slidesPerView: 3, spaceBetween: 15}}} 
        freeMode={true} pagination={{clickable: true}} 
        modules={[FreeMode, Pagination]} 
        className='lg:w-[1000px] md:w-[500px] h-[240px] sm:h-[340px] sm:w-[100px]'
    >
        {serviceData.map((item, idx) => {
            return(
                <SwiperSlide key={idx}>
                    <div className="bg-[rgba(65, 47, 123, 0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89, 65, 169, 0.15)] transition-all duration-300">
                        <div className="text-4xl text-accent mb-4">{item.icon}</div>
                        
                        <div className="mb-8">
                            <div className="mb-2 text-lg">{item.title}</div>
                            <p className='max-w-[350px] leading-normal'>{item.description}</p>
                        </div>

                        <div className="text-3xl">
                            <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
  )
}

export default ServiceSlider;
