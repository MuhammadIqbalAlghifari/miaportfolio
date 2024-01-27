"use client"

import BackgroundPortfolio from "./backgroundPortfolio";
import { ManchesterUnited } from "../libs/ProjectsData"
import { Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { easeOut } from "framer-motion";

export default function ManchesterUnitedProject() {

  const manchesterUnitedContainer = useRef(null)

  let TextItem, ButtonItem = useRef(null)

  useEffect(() => {
    gsap.fromTo(manchesterUnitedContainer.current.children, 
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: .2,
        ease: easeOut,
      },
      )
  })

  useEffect(() => {
    gsap.fromTo([TextItem, ButtonItem],
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: .2,
        ease: easeOut,
      },
      )
  })

    return (
        <div className="relative">
          <div className="w-full absolute bg-no-repeat -z-10 bg-cover">
            <BackgroundPortfolio />
    
            <section className="px-10 transition-all duration-500 relative" style={{fontFamily: 'Futura Hv', zIndex: 1}}>
                  <div className="flex flex-col max-w-7xl mx-auto backdrop-blur-md rounded-lg md:mt-24 duration-500 mt-20 p-8 hover:bg-black hover:bg-opacity-50 duration justify-center h-full items-center py-4">
                      <div className="flex flex-col max-w-3xl items-center justify-center text-center md:gap-4 gap-3">
                          <Text
                          className="lg:text-4xl md:text-2xl text-xl"
                          bgGradient="linear(to-r, #4eecda, #00da8e)"
                          bgClip="text"
                          fontWeight='extrabold'
                          ref={el => {TextItem = el}}
                          >
                          Manchester United
                          </Text>
                      </div>

                    <div ref={manchesterUnitedContainer}>
                      {ManchesterUnited.map(({Name, Description, Category, Status, Language, TechStack, Date, Image1, Image2, Image3, Image4, Image5, HrefWebsite, HrefGithub, index}) => (
                        <>
                          <div className="flex justify-center flex-col md:mt-10 mt-6 md:flex-row gap-2 md:gap-4 items-center w-full">
                              <div key={index}>
                                  <img src={Image1} className="bg-cover bg-no-repeat" />
                              </div>
                              <div className="flex text-white lg:text-md md:text-base text-sm flex-col justify-center items-start text-start gap-3" style={{fontFamily: 'Futura Hv'}}>
                                <p>Name : {Name}</p>
                                <p>Description : {Description}</p>
                                <p>Category : {Category}</p>
                                <p>Status : {Status}</p>
                                <p>Language : {Language}</p>
                                <p>TechStack : {TechStack}</p>
                                <p>Date : {Date}</p>
                              </div>
                          </div>
                          <div className="flex justify-center md:mt-10 mt-8 items-center gap-3 md:gap-4">
                              <a disabled href={HrefWebsite} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border flex justify-center items-center md:gap-4 gap-2 border-white rounded-lg text-white hover:text-[#00da8e] hover:border-[#00da8e] lg:text-md md:text-base text-xs duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:h-10 lg:w-10 md:h-8 md:w-8 h-6 w-6 hover:text-[#00da8e] duration-500">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                </svg>
                                Visit
                              </a>
                              <a disabled href={HrefGithub} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border flex justify-center items-center md:gap-4 gap-2 border-white rounded-lg text-white hover:text-[#00da8e] hover:border-[#00da8e] lg:text-md md:text-base text-xs duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-10 lg:w-10 md:h-8 md:w-8 h-6 w-6 hover:text-[#00da8e] duration-500" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                Github
                              </a>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>

                  <div ref={el => {ButtonItem = el}} className="md:my-10 my-6 group text-white transition-all">
                        <a  href="/Projects" className="flex group-hover:text-[#00da8e] duration-500 text-white justify-start items-center md:gap-4 gap-2 lg:text-md md:text-base text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:h-7 lg:w-7 md:h-5 md:w-5 h-4 w-4 group-hover:-translate-x-2 duration-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                          </svg>
                          Back To Project
                        </a>
                  </div>

            </section>
          </div>
        </div>
      );
}