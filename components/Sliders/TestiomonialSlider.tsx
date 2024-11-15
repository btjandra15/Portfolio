"use client"

import { FaQuoteLeft } from "react-icons/fa";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonialData = [
    {
      image: '/t-avt-1.png',
      name: 'Anne Smith',
      position: 'Customer',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
      image: '/t-avt-2.png',
      name: 'Jane Doe',
      position: 'Customer',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
      image: '/t-avt-3.png',
      name: 'Jhon Doe',
      position: 'Customer',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
];

const TestimonialSlider = () => {
    return (
      <Swiper spaceBetween={10} pagination={{clickable: true}} modules={[Pagination]} className='h-[280px] sm:h-[480px]'>
          {testimonialData.map((testimonial, idx) => {
              return(
                <SwiperSlide key={idx}>
                    <div className="">
                        <div className="">
                            <div className="">
                                <div className="">Avatar Image</div>
                                <div className="">Name</div>
                                <div className="">Position</div>
                            </div>
                        </div>

                        <div className="">
                            <div className="mb-4">
                                <FaQuoteLeft className="text-4xl xl:test-6xl text-white/20 mx-auto md:mx-0"/>
                            </div>

                            <div className="">{testimonial.message}</div>
                        </div>
                    </div>
                </SwiperSlide>
              )
          })}
      </Swiper>
    )
}
  
export default TestimonialSlider;
  