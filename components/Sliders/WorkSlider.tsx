"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import Image from 'next/image'
import FinScopeImg from '@/public/workImages/finScopeImg.png'
import { BsArrowRight } from 'react-icons/bs'
import CoSpaceImg from '@/public/workImages/coSpaceImg.png'
import Link from 'next/link'

const workSlides = {
    slides: [
      {
        images: [
          {
            title: 'FinScope',
            path: FinScopeImg,
            link: 'https://github.com/btjandra15/FinScope'
          },
          {
            title: 'CoSpace',
            path: CoSpaceImg,
            link: "https://github.com/datasheng/csc336-teamproject-repo-bny"
          }
        ],
      },
    ],
};

const WorkSlider = () => {
  return (
    <Swiper spaceBetween={10} pagination={{clickable: true}} modules={[Pagination]} className='h-[300px] sm:h-[480px]'>
        {workSlides.slides.map((slide, idx) => {
            return(
                <SwiperSlide key={idx}>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                        {slide.images.map((image, idx) => {
                            return (
                                <Link 
                                  key={idx} 
                                  href={image.link} 
                                  target="_blank" 
                                  rel='noopener noreferrer' 
                                  className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                                >
                                    <div className="flex items-center justify-center relative overflow-hidden group">
                                        <Image src={image.path} width={500} height={300} alt=''/>

                                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                                            <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                                <div className="delay-100">LIVE</div>
                                                <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>

                                                <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                                    <BsArrowRight/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
  )
}

export default WorkSlider;
