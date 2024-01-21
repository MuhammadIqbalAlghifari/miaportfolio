"use client"
// Hero.jsx
import TypewriterComponent from 'typewriter-effect';
import { Text } from '@chakra-ui/react';
import BackgroundPortfolio from './backgroundPortfolio';
import { useUser } from '../../../context/user';
import Link from 'next/link';

const Hero = () => {
  const { userName } = useUser()

  return (
    <div className='relative'>
        <div className="w-full absolute bg-no-repeat -z-10 bg-cover">
          <BackgroundPortfolio />

        <section className="px-10 transition-all relative" style={{fontFamily: 'Futura Hv', zIndex: 1}}>
          <div className="flex flex-col lg:flex-row max-w-7xl mx-auto lg:justify-between justify-center items-center md:gap-10 gap-8 lg:py-28 md:py-24 py-20">
            <div className="flex flex-col max-w-2xl lg:items-start items-center justify-center lg:text-start text-center md:gap-4 gap-3">
              <div className="text-white lg:text-4xl md:text-2xl text-xl">
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
              >
                Elevate your projects to the next level
              </Text>

              <div className="text-white lg:text-lg md:text-base text-xs">
                Hello {userName || 'Guest'}. Before hiring me see my skill and my latest work to know what i provide for your project!
              </div>

              <div className='flex justify-start items-center md:gap-4 gap-2'>
                <Link href='/Skils' className='group'>
                
                    <button className='flex justify-center items-center md:gap-4 gap-2 bg-white text-black md:px-6 md:py-3 px-4 py-2 lg:text-lg md:text-md text-xs rounded-md hover:bg-[#00da8e] group-hover:text-white duration-500'>
                      See My Skills
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-5 md:h-5 w-4 h-4 duration-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                      </svg>
                    </button>

                </Link>

                <Link href='/Projects' className='group'>
                
                    <button className='flex justify-center items-center md:gap-4 gap-2 bg-white text-black md:px-6 md:py-3 px-4 py-2 lg:text-lg md:text-md text-xs rounded-md hover:bg-[#00da8e] group-hover:text-white duration-500'>
                      See My Projects 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-5 md:h-5 w-4 h-4 group-hover:translate-x-1 duration-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </button>

                </Link>
              </div>
            </div>
            <img src="/hero.jpg" className='lg:max-w-xl opacity-60 hover:opacity-100 duration-500 backdrop-blur-md w-full bg-cover bg-no-repeat rounded-md' />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;



