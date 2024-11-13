import Image from 'next/image';
import React from 'react';
import TopLeftImgImport from '@/public/top-left-img.png';

const TopLeftImg = () => {
  return (
    <div className='absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50 pointer-events-none'>
      <Image src={TopLeftImgImport} alt='Top Left Image' className='w-full h-auto'/>
    </div>
  )
}

export default TopLeftImg;
