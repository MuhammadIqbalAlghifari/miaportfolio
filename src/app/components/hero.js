"use client"
// Hero.jsx
import TypewriterComponent from 'typewriter-effect';
import { Text } from '@chakra-ui/react';
import BackgroundPortfolio from './backgroundPortfolio';
import { useUser } from '../../../context/user';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { easeOut } from 'framer-motion';

const Hero = () => {
  const { userName } = useUser()

  let ImageHero, TextItem1, TextItem2, TextItem3, ButtonItem1, ButtonItem2 = useRef(null)

  useEffect(() => {

    const tl = gsap.timeline();

    tl.fromTo(ImageHero, { opacity: 1, y: 1280}, { duration: 1.2, opacity: 1, y: 0, ease: easeOut }, 'Start');

    tl.fromTo([TextItem1, TextItem2, TextItem3, ButtonItem1, ButtonItem2], 
      {
        opacity: 0,
        y: 40,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: easeOut,
        stagger: .2,
      }, 'Start')

  }, [])

  return (
    <div className='relative'>
        <div className="w-full absolute bg-no-repeat -z-10 bg-cover">
          <BackgroundPortfolio />

        <section className="px-10 transition-all relative" style={{fontFamily: 'Futura Hv', zIndex: 1}}>
          <div className="flex flex-col lg:flex-row max-w-7xl mx-auto lg:justify-between justify-center items-center md:gap-10 gap-8 lg:py-28 md:py-24 py-20">
            <div className="flex flex-col max-w-2xl lg:items-start items-center justify-center lg:text-start text-center md:gap-4 gap-3">
              <div ref={el => {TextItem1 = el}} className="text-white lg:text-4xl md:text-2xl text-xl">
                <TypewriterComponent
                  options={{
                    strings: ['Front End Web Developer'],
                    autoStart: true,
                    loop: true,
                    cursor: "_",
                    delay: 150,
                    pauseFor: 999999999999999,
                  }}
                />
              </div>
              <Text
                className="lg:text-6xl md:text-4xl text-2xl"
                bgGradient="linear(to-r, #4eecda, #00da8e)"
                bgClip="text"
                fontWeight='extrabold'
                ref={el => {TextItem2 = el}}
              >
                Elevate your projects to the next level
              </Text>

              <div ref={el => {TextItem3 = el}} className="text-white lg:text-lg md:text-base text-xs">
                Hello {userName || 'Guest'}. Before hiring me see my latest works to know what i provide for your projects, and contact me if you want me on your projects!
              </div>

              <div className='flex justify-start items-center md:gap-4 gap-2'>
                <Link href='/About#Contact' className='group'>
                
                    <button ref={el => {ButtonItem1 = el}} className='flex justify-center items-center md:gap-4 gap-2 bg-white text-black md:px-6 md:py-3 px-4 py-2 lg:text-lg md:text-md text-[10px] rounded-md hover:bg-[#00da8e] group-hover:text-white duration-500'>
                      Get In Touch
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-5 md:h-5 w-4 h-4 duration-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                      </svg>
                    </button>

                </Link>

                <Link href='/Projects' className='group'>
                
                    <button ref={el => {ButtonItem2 = el}} className='flex justify-center items-center md:gap-4 gap-2 bg-white text-black md:px-6 md:py-3 px-4 py-2 lg:text-lg md:text-md text-[10px] rounded-md hover:bg-[#00da8e] group-hover:text-white duration-500'>
                      See My Projects 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-5 md:h-5 w-4 h-4 group-hover:translate-x-1 duration-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </button>

                </Link>
              </div>
            </div>
            <img ref={el => {ImageHero = el}} src="/hero.jpg" className='lg:max-w-xl opacity-60 hover:opacity-100 duration-500 backdrop-blur-md w-full bg-cover bg-no-repeat rounded-md' />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;



