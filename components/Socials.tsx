import Link from 'next/link';
import React from 'react'
import { RiFacebookBoxLine, RiInstagramLine, RiLinkedinLine, RiYoutubeLine } from 'react-icons/ri';

const socialLinks = [
  {
    path: "",
    icon: <RiYoutubeLine/>
  },
  {
    path: "",
    icon: <RiInstagramLine/>
  },
  {
    path: "",
    icon: <RiFacebookBoxLine/>
  },
  {
    path: "",
    icon: <RiLinkedinLine/>
  },
]

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      {socialLinks.map((social, idx) => {
        return(
          <Link key={idx} href={social.path} className='hover:text-accent transition-all duration-300'>
            {social.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials;
