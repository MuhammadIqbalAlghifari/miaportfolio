"use client"

import { useEffect, useRef } from "react";
import BackgroundPortfolio from "./backgroundPortfolio";
import CollapseProjects from "./MyProjectsCollapse";
import { Text } from "@chakra-ui/react";
import gsap from "gsap";
import { easeOut } from "framer-motion";

export default function ProjectList() {

  let tittleItem, descriptionItem = useRef(null)

  useEffect(() => {
    gsap.fromTo([tittleItem, descriptionItem], 
        {
            opacity: 0
        },
        {
            opacity: 1,
            duration: 1,
            stagger: .2,
            ease: easeOut,
        }
        )
})

    return (
        <div className="relative">
          <div className="w-full absolute bg-no-repeat -z-10 bg-cover">
            <BackgroundPortfolio />
    
            <section className="px-10 transition-all duration-500 relative" style={{fontFamily: 'Futura Hv', zIndex: 1}}>
                  <div className="flex flex-col max-w-7xl mx-auto justify-center h-full items-center py-4">
                      <div className="flex flex-col max-w-3xl items-center justify-center text-center md:gap-4 gap-3 md:pt-24 pt-20">
                          <Text
                          className="lg:text-4xl md:text-2xl text-xl"
                          bgGradient="linear(to-r, #4eecda, #00da8e)"
                          bgClip="text"
                          fontWeight='extrabold'
                          ref={el => {tittleItem = el}}
                          >
                          My latest Jobs
                          </Text>
                          <Text
                          ref={el => {descriptionItem = el}}
                          className="lg:text-xl md:text-md text-sm"
                          color='white'
                          fontWeight='extrabold'
                          >
                          With knowledge in web development and design, I after the best project resulting in quality work.
                          </Text>
                      </div>

                      <CollapseProjects/>

                  </div>
            </section>
          </div>
        </div>
      );
}