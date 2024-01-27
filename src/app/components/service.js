"use client"

import { useEffect, useRef } from "react";
import MyServices from "./MyServices";
import BackgroundPortfolio from "./backgroundPortfolio";
import { Text } from "@chakra-ui/react";
import gsap from "gsap";
import { easeOut } from "framer-motion";

export default function ServicesList() {

  let tittleItem, descriptionItem = useRef(null)

  useEffect(() => {
    gsap.fromTo([tittleItem, descriptionItem], 
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
                  <div className="flex flex-col max-w-7xl h-full mx-auto justify-center items-center py-4">
                      <div className="flex flex-col max-w-3xl items-center justify-center text-center md:gap-4 gap-3 md:pt-24 pt-20">
                          <Text
                          className="lg:text-4xl md:text-2xl text-xl"
                          bgGradient="linear(to-r, #4eecda, #00da8e)"
                          bgClip="text"
                          fontWeight='extrabold'
                          ref={el => {tittleItem = el}}
                          >
                          My Service
                          </Text>
                          <Text
                          className="lg:text-6xl md:text-4xl text-2xl"
                          color='white'
                          fontWeight='extrabold'
                          ref={el => {descriptionItem = el}}
                          >
                          What Do I Do
                          </Text>
                      </div>

                      <MyServices/>

                  </div>
            </section>
          </div>
        </div>
      );
}