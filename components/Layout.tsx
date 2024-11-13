import React, { ReactNode } from 'react'
import {Sora} from 'next/font/google';
import Nav from './Nav';
import Header from './Header';
import TopLeftImg from './TopLeftImg';
import ParticlesContainer from './ParticlesContainer';

const sora = Sora({
    subsets: ['latin'],
    variable: '--font-sora',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({children}: LayoutProps) => {

  
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <TopLeftImg/>
      <Header/>
      <Nav/>

      <main className="">
        {children}
      </main>
    </div>
  )
}

export default Layout;
