import { Statesbox } from '@/component/Helper/Statesbox'
import React from 'react'

const Hero = () => {
    return (
        <section id='hero'>
            <div className=' relative w-full h-[100vh] sm-h-sreen'>
                <div className=' absolute top-0 left-0 w-full h-full bg-gray-800 opacity-30 shadow-md'></div>
                <video src='/images/homeVideo.mp4'
                    autoPlay muted loop disablePictureInPicture preload='metadata'
                    controlsList="nodownload nofullscreen noremoteplayback"
                    controls={false}
                    className=' w-full h-full object-cover' />

                <div className=' absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <div className=' flex items-center justify-center flex-col w-full h-full p-5'>
                        <div>
                            <h1 className=' text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] 
                    tracking-[0.6rem] text-white font-bold'>START YOUR SMART BUSINESS</h1>
                            <p className=' text-[8px] mb-4 md:mb-0 text-center md:text-[6px] lg:text-[15px] 
                    tracking-[0.3rem] text-white font-medium'>MAKING YOUR SOFTWARE DREAMS COME TRUE</p>
                        </div>
                        <Statesbox />
                        <div>
                            <a href='' className=' bg-blue-950 hover:bg-blue-900 transition-colors border-none rounded-md 
                   px-15 md:px-20 -mt-4 py-2.5 overflow-hidden group relative ease-out duration-300 text-white'>
                                Explore Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero