"use client"

import React from 'react'
import Circles from '@/components/Circles';
import ServiceSlider from '@/components/ServiceSlider';
import Bulb from '@/components/Bulb';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variant';

const ServicePage = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles/>

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 className='h2 xl:mt-8' variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden">
              My Services <span className='text-accent'>.</span> 
            </motion.h2>

            <motion.p className='mb-4 max-w-[400px] mx-auto lg:mx-0' variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden">
              I provide the services on the right. I have experience building multiple websites, games from scratch, and also helped fix websites/games as well
            </motion.p>
          </div>

          <motion.div className="w-full xl:max-w-[65%]" variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden">
            <ServiceSlider/>
          </motion.div>
        </div>
      </div>

      <Bulb/>
    </div>
  )
}

export default ServicePage;
