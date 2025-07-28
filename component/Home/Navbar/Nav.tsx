"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
const Nav = () => {

  const [navBg, setNaveBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNaveBg(true);
      if (window.scrollY < 90) setNaveBg(false);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [])


  return (
    <div className={`${navBg ? 'bg-blue-950 shadow-md' : 'fixed'} transition-all duration-200 h-[8vh] lg:h-[10vh] 
    z-[1000] fixed w-full`}>

      <div className=' flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>

        {/* Logo */}
        <div className=' flex items-center space-x-2'>
          <Image
            src='/images/webLogo.svg'
            alt='SoftwoGate Logo'
            width={40}  // or whatever size fits your layout
            height={40}
            className='h-8 w-auto lg:h-10'
          />
        </div>

        {/* Nav link */}
        <div className='hidden lg:flex items-center space-x-10 text-white'>
          <a href='#hero' className='relative group'>
            Home
            <span className='absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[3px] bg-white transition-all 
            duration-300 group-hover:w-full'></span>
          </a>
          <a href='#about' className='relative group'>
            About
            <span className='absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[3px] bg-white transition-all 
            duration-300 group-hover:w-full'></span>
          </a>
          <a href='#service' className='relative group'>
            Service
            <span className='absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[3px] bg-white transition-all 
            duration-300 group-hover:w-full'></span>
          </a>
          <a href='' className='relative group'>
            Contact
            <span className='absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[3px] bg-white transition-all 
            duration-300 group-hover:w-full'></span>
          </a>
        </div>


        <div>
          <a
            href=''
            className='bg-emerald-600 hover:bg-emerald-400 text-white px-4 py-2 border-none rounded-md lg:h-8 h-10 transition-colors duration-300'
          >
            Resume
          </a>
        </div>


      </div>

    </div>
  )
}

export default Nav