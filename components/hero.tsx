import React from 'react'
import { Spotlight } from './ui/Spolight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

import { image } from '@/data/Index'


const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
    <div>
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
       fill="white"
       />
      <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
    </div>
    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
    </div>
   <div className='flex justify-center relative my-20 z-10'>
      <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
      {image.map((info) => (
            <div
              key={info.id}
               className="w-36 h-36  justify-start items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-full overflow-hidden border-2 border-gray-300 ">
              <img src={info.img} alt="icons" className='w-36 h-36 object-cover absolute ' />
              </div>
              ))}
        <TextGenerateEffect
        className="text-center text-[40px] md:text-5xl lg:text-6xl"
        words="Transforming Ideas into Seamless Reality"
         />
         <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
          Hi I&apos;m Ujjwal Nepal, a fullStack Developer based in Nepal Kathmandu.
         </p>
         <a href='#about'>
          <MagicButton 
          title="Show my work"
          icon={<FaLocationArrow />}
          position='right'
          />
         </a>
      </div>
   </div>
    </div>
  )
}

export default Hero
