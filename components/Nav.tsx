"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { HiHome, HiUser } from 'react-icons/hi';
import { HiChatBubbleBottomCenterText, HiEnvelope, HiRectangleGroup, HiViewColumns } from 'react-icons/hi2';

const navData = [
    {name: 'Home', path: '/', icon: <HiHome />},
    {name: 'Work', path: '/work', icon: <HiViewColumns />},
    {name: 'Services', path: '/services', icon: <HiRectangleGroup />},
    {name: 'Testiomonials', path: '/testimonials', icon: <HiChatBubbleBottomCenterText />},
    {name: 'About', path: '/about', icon: <HiUser />},
    {name: 'Contact', path: '/contact', icon: <HiEnvelope />},
];

const Nav = () => { 
    const pathname = usePathname();

    return (
        <div className="flex">
            <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
                <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
                    {navData.map((link, idx) => (
                        <Link key={idx} href={link.path} className={`${link.path === pathname && 'text-accent'} relative flex itms-center group hover:text-accent transition-all duration-300`} shallow>
                            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                                    <div className="text-[12px] leading-none font-semibold capitalize">{link.name}</div>
                                    <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                                </div>
                            </div>

                            <div className="">{link.icon}</div>
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
}

export default Nav;
